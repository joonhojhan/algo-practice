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
	const res = [];
	const n = a.length;
	for (let i = 0; i < n; i++) {
		const hash = Array(26).fill(0);
		const str1 = a[i];
		const str2 = b[i];
		if (str1.length !== str2.length) {
			res.push(-1);
			continue;
		}
		const strn = str1.length;
		let diff = 0;
		const charCodeModifier = 'a'.charCodeAt(0);
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
