const sort = function (arr) {
	for (let i = 1; i < arr.length; i++) {
		const val = arr[i];
		for (let j = i - 1; j >= 0; j--) {
			if (val > arr[j]) {
				arr[j + 1] = val;
				break;
			} else arr[j + 1] = arr[j];
			if (j === 0) arr[0] = val;
		}
	}
	return arr;
};

console.log(sort([6, 2, 1, 4, 5, 3]));
console.log(
	sort([
		987,
		65,
		65,
		43,
		21,
		34,
		5,
		6,
		7,
		8,
		7,
		6,
		54,
		3,
		21,
		2,
		3,
		45,
		7,
		8,
		76,
		54,
		32,
	])
);
