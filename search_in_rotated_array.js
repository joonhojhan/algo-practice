/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
*/

// time complexity: O(log(N))
const search = function (nums, target) {
	let pivot = 0;
	while (nums[pivot] < nums[pivot + 1]) {
		pivot++;
	}
	pivot++;
	const leftArr = nums.slice(0, pivot);
	const rightArr = nums.slice(pivot);
	let arr;
	let isRight = false;
	if (target < leftArr[0]) {
		arr = rightArr;
		isRight = true;
	} else {
		arr = leftArr;
		isRight = false;
	}
	let left = 0;
	let right = arr.length - 1;
	while (left <= right) {
		const mid = Math.floor((left + right) / 2);
		if (arr[mid] === target) return isRight ? mid + leftArr.length : mid;
		else if (arr[mid] < target) left = mid + 1;
		else right = mid - 1;
	}
	return -1;
};

console.log(search([1, 3], 2) === -1);
console.log(search([1, 3], 3) === 1);
console.log(search([4, 5, 6, 7, 0, 1, 2], 0) === 4);
console.log(search([4, 5, 6, 7, 0, 1, 2], 3) === -1);
