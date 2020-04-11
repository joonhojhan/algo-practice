const findDuplicate = (nums) => {
	let h = nums[0];
	let t = nums[0];
	do {
		t = nums[t];
		h = nums[h];
		h = nums[h];
	} while (h !== t);
	h = nums[0];
	while (h !== t) {
		t = nums[t];
		h = nums[h];
	}
	return h;
};

console.log(findDuplicate([2, 5, 9, 6, 9, 3, 8, 9, 7, 1]) === 9);
console.log(findDuplicate([1, 3, 4, 2, 2]) === 2);
console.log(findDuplicate([3, 1, 3, 4, 2]) === 3);
