import nmmn.plots
import numpy as np
import matplotlib.pyplot as plt

wolfram=nmmn.plots.wolframcmap() # for Mathematica's cmap
parula=nmmn.plots.parulacmap() # for MATLAB's cmap
turbo=nmmn.plots.turbocmap() # Turbo

# make these smaller to increase the resolution
dx, dy = 0.02, 0.02

# generate 2 2d grids for the x & y bounds
y, x = np.mgrid[slice(-3, 3 + dy, dy),
                slice(-3, 3 + dx, dx)]
z = (1 - x / 2. + x ** 5 + y ** 3) * np.exp(-x ** 2 - y ** 2)
# x and y are bounds, so z should be the value *inside* those bounds.
# Therefore, remove the last value from the z array.
z = z[:-1, :-1]
z_min, z_max = -np.abs(z).max(), np.abs(z).max()

plt.pcolormesh(x, y, z, vmin=z_min, vmax=z_max)
plt.title("Viridis")
plt.colorbar()
plt.savefig("thingy2.png")