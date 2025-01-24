/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function (grid) {
  const explore = (line, pos) =>
    line.some((p, index) => p === 1 && index !== pos);

  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 0) continue;
      count +=
        explore(grid, grid[i], j) ||
        explore(
          grid,
          grid.map((r) => r[j]),
          i,
        );
    }
  }
  return count;
};
