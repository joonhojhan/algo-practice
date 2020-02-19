/*
Given a string s and a string t, check if s is subsequence of t.

You may assume that there is only lower case English letters in both s and t. t is potentially a very long (length ~= 500,000) string, and s is a short string (<=100).

A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:
s = "abc", t = "ahbgdc"

Return true.

Example 2:
s = "axc", t = "ahbgdc"

Return false.
*/

const isSubsequence = function(s, t) {
	let sn = s.length;
	if (!sn) return true;
	let tn = t.length;
	let dp = Array(sn).fill(false);
	let dpi = 0;
	for (let i = 0; i < tn; i++) {
		if (dpi > sn - 1) {
			return dp[sn - 1];
		} else if (t[i] === s[dpi]) {
			dp[dpi] = true;
			dpi++;
		}
	}
	return dp[sn - 1];
};

console.log(isSubsequence('abc', 'ahbgdc') === true);
console.log(isSubsequence('axc', 'ahbgdc') === false);
console.log(isSubsequence('', 'ahbgdc') === true);
