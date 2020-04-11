/*
Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

Example 1:

[[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]
Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.
Example 2:

[[0,0,0,0,0,0,0,0]]
Given the above grid, return 0.
*/
const maxAreaOfIsland = function (grid) {
	let maxArea = 0;
	let currArea = 0;
	function helper(grid, row, col) {
		if (
			row < 0 ||
			row >= grid.length ||
			col < 0 ||
			col >= grid[0].length ||
			!grid[row][col]
		) {
			return;
		}
		currArea++;
		grid[row][col] = 0;
		helper(grid, row - 1, col);
		helper(grid, row + 1, col);
		helper(grid, row, col - 1);
		helper(grid, row, col + 1);
	}
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			currArea = 0;
			if (grid[i][j]) {
				helper(grid, i, j);
				if (currArea > maxArea) {
					maxArea = currArea;
				}
			}
		}
	}
	return maxArea;
};

console.log(
	maxAreaOfIsland([
		[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
		[0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
		[0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
	]) === 6
);
console.log(maxAreaOfIsland([[0, 0, 0, 0, 0, 0, 0, 0]]) === 0);
console.log(
	maxAreaOfIsland([
		[1, 1, 0, 0, 0],
		[1, 1, 0, 0, 0],
		[0, 0, 0, 1, 1],
		[0, 0, 0, 1, 1],
	]) === 4
);
