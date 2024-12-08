import numpy as np
import numpy.typing as npt
from typing import Any
from folium import Map
from folium.plugins import HeatMapWithTime
import math
import time
import os

class MapMaker:
    def __init__(self):
        self.r_earth: int = 6378

    def _calc_aluminium_content(self, mass: float) -> float:
        # this mult is assumed in the paper
        return mass * 0.3

    def _calc_gas_radius(self, mass: float) -> float:
        # PV = nRT -> V = nRT / P
        # Al = 26.982 g/mol
        # 4 mols Al + 6 mols Oxygen -> 2 mols Al2O3
        # initial altitude - 86 km acc. to paper, assume complete incineration by 50 km (similar to asteroids)
        # used altitude = 86 + 50 / 2 = 68 km

        P = 7   # in Pascals at 68 km altitude, according to PDAS
        T = 225     # in Kelvin at 68 km altitude, according to PDAS
        R = 8.31
        n = self._calc_aluminium_content(mass) / 0.026982    # calc moles of Al
        V = n*R*T / P

        return (3/4 * V / math.pi) ** (1./3.)

    def _get_point_intensity(self, center: tuple[float, float], point_loc: tuple[float, float], radius: float) -> float:
        distance = math.dist(center, point_loc)
        if distance > radius:
            return 0
        intensity = math.sqrt(radius**2 - distance**2)
        return intensity / radius

    def generate_heatmap(self, mass: float, center: (float, float)) -> npt.NDArray[Any]:
        radius: float = self._calc_gas_radius(mass)

        # convert meters to degrees, should work in areas not around the north poles
        lat_change = radius / 111000    # around 111 km per degree
        long_change = radius / 111000

        # create grid ready for heatmap
        x = np.linspace(center[0] - long_change, center[0] + long_change, 9)
        y = np.linspace(center[1] - lat_change, center[1] + lat_change, 9)
        x, y = np.meshgrid(x, y)
        x = np.expand_dims(x, -1)
        y = np.expand_dims(y, -1)
        base = np.concatenate((x, y), axis=-1)
        base = np.concatenate((base, np.zeros(x.shape)), axis=-1)

        # calc intensity for each point based on height of sphere of gas at point
        for i in range(base.shape[0]):
            for j in range(base.shape[1]):
                base[i][j][2] = self._get_point_intensity(center, base[i][j][:2], radius)

        base = base.reshape((base.shape[0]*base.shape[1], 3))
        return base

    def generate_heatmap_with_time(self, mass: float, center: (float, float)):
        num_time_steps = 100
        data = []

        stddev_start = 0.01
        stddev_end = 0.3
        gradient1 = {
            0.0: 'blue',
            1.0: 'red'
        }

        base = self.generate_heatmap(mass, center)

        # add white noise
        for i in range(num_time_steps):
            stddev = stddev_start + (stddev_end - stddev_start) // num_time_steps * i
            move_data = np.random.normal(size=(len(base), 2)) * stddev
            arr = np.ones((move_data.shape[0], 1)) * -0.02 # decrease intensity of each point by 0.02
            move_data = np.concatenate((move_data, arr), axis=-1)
            base += move_data
            data.append(base.tolist())

        m = Map([*center], zoom_start=9)
        hm = HeatMapWithTime(data, radius=50, gradient=gradient1)
        hm.add_to(m)
        file_name = "heatmap_anim" + str(int(time.time()))
        m.save("/maps" + file_name)
        file_path: os.PathLike = os.getcwd()
        file_path = os.path.join(file_path, "/maps/", file_name)
        
        return file_path


if __name__ == "__main__":
    location = (52, 23)
    mass = 10
    mm = MapMaker()
    move_data = mm.generate_heatmap(mass, location)
    print(move_data)
    print(mm.generate_heatmap_with_time(250, location))
