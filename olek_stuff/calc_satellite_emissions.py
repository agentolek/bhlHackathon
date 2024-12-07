import numpy as np
import numpy.typing as npt
from typing import Any
import math

def calc_aluminium_content(mass: float) -> float:
    # this mult is assumes in the paper
    return mass * 0.3

def calc_gas_radius(mass: float) -> float:
    # PV = nRT -> V = nRT / P
    # Al = 26.982 g/mol
    # 4 mols Al + 6 mols Oxygen -> 2 mols Al2O3
    # initial altitude - 86 km acc. to paper, assume complete incineration by 50 km (similar to asteroids)
    # used altitude = 86 + 50 / 2 = 68 km

    P = 7 # in Pascals at 68 km altitude, according to PDAS
    T = 225 # in Kelvin at 68 km altitude, according to PDAS
    R = 8.31
    n = calc_aluminium_content(mass) / 0.026982 # calc moles of Al
    V = n*R*T / P

    return (3/4 * V / math.pi) ** (1./3.)

def get_point_intensity(center: tuple[float, float], point_loc: tuple[float, float], radius: int = 1) -> float:
    distance = math.dist(center, point_loc)
    if (distance > radius): return 0
    intensity = math.sqrt(radius**2 - distance**2)
    return intensity / radius

def generate_heatmap(time_elapsed: float, mass: float, center: tuple[float, float]) -> npt.NDArray[Any]:
    radius: float = calc_gas_radius(mass)

    # create grid ready for heatmap
    x = np.linspace(center[0] - radius, center[0] + radius, 9)
    y = np.linspace(center[1] - radius, center[1] + radius, 9)
    x, y = np.meshgrid(x, y)
    x = np.expand_dims(x, -1)
    y = np.expand_dims(y, -1)
    base = np.concatenate((x, y), axis=-1)
    base = np.concatenate((base, np.zeros(x.shape)), axis=-1)

    # calc intensity for each point based on height of sphere of gas at point
    for i in range(base.shape[0]):
        for j in range(base.shape[1]):
            base[i][j][2] = get_point_intensity(center, base[i][j][:2], radius)

    base = base.reshape((base.shape[0]*base.shape[1], 3))
    return base


if __name__ == "__main__":
    location = [52, 23]
    mass = 10
    arr = generate_heatmap(0, mass, location)
    print(arr.shape)