const spiralOrder = function (matrix) {
	if (!matrix.length) return [];
	const res = [];
	let [row, col] = [0, 0];
	let d = 0;
	const dir = {
		0: [0, 1], // right
		1: [1, 0], // down
		2: [0, -1], // left
		3: [-1, 0], // up
	};
	for (let i = 0; i < matrix.length * matrix[0].length; i++) {
		res.push(matrix[row][col]);
		matrix[row][col] = null;
		switch (d % 4) {
			case 0:
				// console.log('right');
				if (col === matrix[0].length - 1 || matrix[row][col + 1] === null) d++;
				[row, col] = [row + dir[d % 4][0], col + dir[d % 4][1]];
				break;
			case 1:
				// console.log('down');
				if (row === matrix.length - 1 || matrix[row + 1][col] === null) d++;
				[row, col] = [row + dir[d % 4][0], col + dir[d % 4][1]];
				break;
			case 2:
				// console.log('left');
				if (col === 0 || matrix[row][col - 1] === null) d++;
				[row, col] = [row + dir[d % 4][0], col + dir[d % 4][1]];
				break;
			case 3:
				// console.log('up');
				if (row === matrix.length - 1 || matrix[row - 1][col] === null) d++;
				[row, col] = [row + dir[d % 4][0], col + dir[d % 4][1]];
				break;
			default:
				break;
		}
	}
	return res;
};

console.log(
	spiralOrder([
		[1, 2, 3, 4],
		[5, 6, 7, 8],
		[9, 10, 11, 12],
		[13, 14, 15, 16],
	])
);
console.log(
	spiralOrder([
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	])
);
