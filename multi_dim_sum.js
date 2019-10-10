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
