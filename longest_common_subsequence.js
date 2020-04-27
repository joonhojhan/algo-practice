/*
Given two strings text1 and text2, return the length of their longest common subsequence.

A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.

If there is no common subsequence, return 0.

Example 1:

Input: text1 = "abcde", text2 = "ace"
Output: 3
Explanation: The longest common subsequence is "ace" and its length is 3.
Example 2:

Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.
Example 3:

Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.
*/

const longestCommonSubsequence = function (text1, text2) {
	const dp = [];
	for (let i = 0; i <= text1.length; i++) {
		dp.push(Array(text2.length + 1).fill(0));
	}
	for (let i = 1; i < dp.length; i++) {
		for (let j = 1; j < dp[i].length; j++) {
			if (text1[i - 1] === text2[j - 1]) {
				dp[i][j] = 1 + dp[i - 1][j - 1];
			} else {
				dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
			}
		}
	}
	return dp[dp.length - 1][dp[0].length - 1];
};

console.log(longestCommonSubsequence('abcde', 'abc') === 3);
console.log(longestCommonSubsequence('abc', 'abc') === 3);
console.log(longestCommonSubsequence('abc', 'def') === 0);
console.log(longestCommonSubsequence('iloveyou', 'ihateyou') === 5);
