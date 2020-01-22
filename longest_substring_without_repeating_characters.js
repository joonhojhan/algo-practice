/*
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

const lengthOfLongestSubstring = function(s) {
	let hash = {};
	let currLongest = 0;
	let left = 0;
	for (let i = 0; i < s.length; i++) {
		let char = s[i];
		hash[char] = hash[char] ? hash[char] + 1 : 1;
		while (hash[char] > 1) {
			hash[s[left]]--;
			left++;
		}
		if (i - left + 1 > currLongest) currLongest = i - left + 1;
	}
	return currLongest;
};

console.log(lengthOfLongestSubstring('longestsubstring') === 8);
console.log(lengthOfLongestSubstring('aaaaaaaaaaaaaaaa') === 1);
console.log(
	lengthOfLongestSubstring(
		'aosiudbvasihdbckvuaewbghksdjbvkszgvdchakwjbcsgheduzbfsdkjfhsbdhfgabsdhjfbashgdkufbsadjhbfadgksvuhbfsdahgfkbasudfksahdbfsdjf'
	) === 13
);
