/*
Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND of all numbers in this range, inclusive.

Example 1:

Input: [5,7]
Output: 4
Example 2:

Input: [0,1]
Output: 0
*/

const rangeBitwiseAnd = function (m, n) {
	// brute force
	// let res = m;
	// for (let i = m + 1; i <= n; i++) {
	//     if (res === 0) return 0;
	//     res &= i;
	// }
	// return res;

	// optimized
	// while (n > m) {
	//     n = n & n - 1
	// }
	// return n

	// more optimized
	let count = 0;
	while (m !== n) {
		m >>= 1;
		n >>= 1;
		count++;
	}
	for (let i = 0; i < count; i++) {
		m <<= 1;
	}
	return m;
};

console.log(rangeBitwiseAnd(5, 7) === 4);
console.log(rangeBitwiseAnd(0, 1) === 0);
