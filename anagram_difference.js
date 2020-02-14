/*
Given two strings, determine the minimum number of characters in either string
that must be modified to make the two strings anagrams. If it is not possible to
make the two strings anagrams, return -1.

Example:
a = ['tea', 'tea', 'act']
b = ['ate', 'toe', 'acts']
returns [0, 1, -1]
*/

function getMinimumDifference(a, b) {
	let res = [];
	let n = a.length;
	for (let i = 0; i < n; i++) {
		let hash = Array(26).fill(0);
		let str1 = a[i];
		let str2 = b[i];
		if (str1.length !== str2.length) {
			res.push(-1);
			continue;
		}
		let strn = str1.length;
		let diff = 0;
		let charCodeModifier = 'a'.charCodeAt(0);
		for (let j = 0; j < strn; j++) {
			hash[str1.charCodeAt(j) - charCodeModifier]++;
		}
		for (let j = 0; j < strn; j++) {
			hash[str2.charCodeAt(j) - charCodeModifier]--;
			if (hash[str2.charCodeAt(j) - charCodeModifier] < 0) {
				diff++;
			}
		}
		res.push(diff);
	}
	return res;
}

console.log(getMinimumDifference(['tea', 'tea', 'act'], ['ate', 'toe', 'acts']));
