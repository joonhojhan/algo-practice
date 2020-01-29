const sort = function(arr) {
	for (let i = 0; i < arr.length; i++) {
		let minIdx = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[minIdx]) minIdx = j;
		}
		[arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
	}
	return arr;
};

console.log(sort([2, 1, 4, 5, 3]));
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
