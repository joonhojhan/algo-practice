/*
In a gold mine grid of size m * n, each cell in this mine has an integer representing the amount of gold in that cell, 0 if it is empty.

Return the maximum amount of gold you can collect under the conditions:

Every time you are located in a cell you will collect all the gold in that cell.
From your position you can walk one step to the left, right, up or down.
You can't visit the same cell more than once.
Never visit a cell with 0 gold.
You can start and stop collecting gold from any position in the grid that has some gold.


Example 1:

Input: grid = [[0,6,0],[5,8,7],[0,9,0]]
Output: 24
Explanation:
[[0,6,0],
 [5,8,7],
 [0,9,0]]
Path to get the maximum gold, 9 -> 8 -> 7.
Example 2:

Input: grid = [[1,0,7],[2,0,6],[3,4,5],[0,3,0],[9,0,20]]
Output: 28
Explanation:
[[1,0,7],
 [2,0,6],
 [3,4,5],
 [0,3,0],
 [9,0,20]]
Path to get the maximum gold, 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7.
*/

// inefficient space and time
// const copy = (grid) => {
// 	let gridCopy = [];
// 	for (let row = 0; row < grid.length; row++) {
// 			const newRow = [];
// 			for (let col = 0; col < grid[row].length; col++) {
// 					newRow.push(grid[row][col])
// 			}
// 			gridCopy.push(newRow)
// 	}
// 	return gridCopy
// }

// const getMaximumGold = function(grid) {
// 	let res = 0;
// 	for (let row = 0; row < grid.length; row++) {
// 			for (let col = 0; col < grid[row].length; col++) {
// 					if (grid[row][col] > 0) {
// 							helper(grid, row, col);
// 					}
// 			}
// 	}
// 	return res;
// 	function helper(grid, row, col, total=0) {
// 			let newGrid = copy(grid);
// 			if (row >= newGrid.length || col >= newGrid[row].length || row < 0 || col < 0 || newGrid[row][col] < 0 || newGrid[row][col] === 0) {
// 					return
// 			}
// 			total += newGrid[row][col]
// 			newGrid[row][col] = -1
// 			if (total > res) {
// 					res = total
// 			}
// 			if (row < newGrid.length - 1) {
// 					helper(newGrid, row + 1, col, total);
// 			}
// 			if (col < newGrid[row].length - 1) {
// 					helper(newGrid, row, col + 1, total);
// 			}
// 			if (row > 0) {
// 					helper(newGrid, row - 1, col, total)
// 			}
// 			if (col > 0) {
// 					helper(newGrid, row, col - 1, total);
// 			}
// 	}
// };

var getMaximumGold = function(grid) {
	let res = 0;
	let currentGold = 0;
	for (let row = 0; row < grid.length; row++) {
			for (let col = 0; col < grid[row].length; col++) {
					if (grid[row][col] > 0) {
							helper(row, col);
					}
			}
	}
	return res;
	function helper(row, col) {
			let cellGold = grid[row][col]
			grid[row][col] = 0;
			currentGold += cellGold;
			if (currentGold > res) {
					res = currentGold;
			}
			if (row > 0 && grid[row - 1][col] > 0) {
					helper(row - 1,col)
			}
			if (col > 0 && grid[row][col - 1] > 0) {
					helper(row, col - 1)
			}
			if (row < grid.length - 1 && grid[row + 1][col] > 0) {
					helper(row + 1, col)
			}
			if (col < grid[row].length - 1 && grid[row][col + 1] > 0) {
					helper(row, col + 1)
			}
			grid[row][col] = cellGold;
			currentGold -= cellGold;
	}
};

const test1 = [
	[0, 6, 0],
	[5, 8, 7],
	[0, 9, 0],
];
const test2 = [
	[1, 0, 7],
	[2, 0, 6],
	[3, 4, 5],
	[0, 3, 0],
	[9, 0, 20],
];
const test3 = [
	[23, 21, 38, 12, 18, 36, 0, 7, 30, 29, 20, 3, 28],
	[23, 3, 19, 2, 1, 11, 4, 8, 9, 24, 6, 5, 35],
];
console.log(getMaximumGold(test1) === 24); // 24
console.log(getMaximumGold(test2) === 28); // 28
console.log(getMaximumGold(test3) === 415);
