function multiDimSum(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		const el = arr[i];
		if (Array.isArray(el)) {
			sum += multiDimSum(el);
		} else {
			sum += el;
		}
	}
	return sum;
}

function multiDimSumFlatten(arr) {
	return String(arr)
		.split(',')
		.reduce((acc, el) => (acc += Number(el)), 0);
}

console.log(multiDimSum([1, 2, 3]));
console.log(multiDimSum([1, [2], 3]));
console.log(multiDimSum([1, [2, [3]]]));
console.log(multiDimSum([1, [2, [3, 4]]]));
console.log(multiDimSumFlatten([1, 2, 3]));
console.log(multiDimSumFlatten([1, [2], 3]));
console.log(multiDimSumFlatten([1, [2, [3]]]));
console.log(multiDimSumFlatten([1, [2, [3, 4]]]));
