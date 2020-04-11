/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note: All given inputs are in lowercase letters a-z.
*/

const longestCommonPrefix = function (strs) {
	const prefixes = {};
	let currPrefix = '';
	if (!strs.length) return currPrefix;
	for (let i = 1; i <= strs[0].length; i++) {
		prefixes[strs[0].slice(0, i)] = true;
	}
	for (const prefix in prefixes) {
		let found = true;
		for (let i = 1; i < strs.length; i++) {
			const str = strs[i];
			if (prefix !== str.slice(0, prefix.length)) {
				found = false;
				break;
			}
			if (!found) break;
		}
		if (found) currPrefix = prefix;
	}
	return currPrefix;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']) === 'fl');
console.log(longestCommonPrefix(['dog', 'racecar', 'car']) === '');
