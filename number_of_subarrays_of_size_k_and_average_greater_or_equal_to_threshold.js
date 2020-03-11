/*
Given an array of integers arr and two integers k and threshold.

Return the number of sub-arrays of size k and average greater than or equal to threshold.

Example 1:

Input: arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4
Output: 3
Explanation: Sub-arrays [2,5,5],[5,5,5] and [5,5,8] have averages 4, 5 and 6 respectively. All other sub-arrays of size 3 have averages less than 4 (the threshold).
Example 2:

Input: arr = [1,1,1,1,1], k = 1, threshold = 0
Output: 5
Example 3:

Input: arr = [11,13,17,23,29,31,7,5,2,3], k = 3, threshold = 5
Output: 6
Explanation: The first 6 sub-arrays of size 3 have averages greater than 5. Note that averages are not integers.
Example 4:

Input: arr = [7,7,7,7,7,7,7], k = 7, threshold = 7
Output: 1
Example 5:

Input: arr = [4,4,4,4], k = 4, threshold = 1
Output: 1
*/

const numOfSubarrays = function(arr, k, threshold) {
	let res = 0;
	let sum = 0;
	let n = arr.length;
	let left = 0;
	for (let i = 0; i < k; i++) {
		let num = arr[i];
		sum += num;
	}
	for (let i = k; i < n + 1; i++) {
		let num = arr[i];
		if (sum / k >= threshold) {
			res++;
		}
		sum += num;
		sum -= arr[left];
		left++;
	}
	return res;
};

console.log(numOfSubarrays([2, 2, 2, 2, 5, 5, 5, 8], 3, 4) === 3);
console.log(numOfSubarrays([1, 1, 1, 1, 1], 1, 0) === 5);
console.log(numOfSubarrays([11, 13, 17, 23, 29, 31, 7, 5, 2, 3], 3, 5) === 6);
console.log(numOfSubarrays([7, 7, 7, 7, 7, 7, 7], 7, 7) === 1);
console.log(numOfSubarrays([4, 4, 4, 4], 4, 1) === 1);
