/*
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.
*/
const minPathSum = function(grid) {
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if (i === 0 && j === 0) continue;
			else if (i === 0 && j !== 0) {
				grid[i][j] += grid[i][j - 1];
			} else if (i !== 0 && j === 0) {
				grid[i][j] += grid[i - 1][j];
			} else {
				grid[i][j] = Math.min(
					grid[i][j] + grid[i - 1][j],
					grid[i][j] + grid[i][j - 1]
				);
			}
		}
	}
	return grid[grid.length - 1][grid[grid.length - 1].length - 1];
};

console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]));
