/*
Given a palindromic string palindrome, replace exactly one character by any lowercase English letter so that the string becomes the lexicographically smallest possible string that isn't a palindrome.

After doing so, return the final string.  If there is no way to do so, return the empty string.



Example 1:

Input: palindrome = "abccba"
Output: "aaccba"
Example 2:

Input: palindrome = "a"
Output: ""


Constraints:

1 <= palindrome.length <= 1000
palindrome consists of only lowercase English letters.
*/

const breakPalindrome = function(str) {
	// if length of string is 1, it is palindrome so return ''
	if (str.length === 1) return '';
	str = str.split('');
	for (let i = 0; i < str.length; i++) {
		// j will equal i if mid point
		let j = str.length - 1 - i;
		// if j equals i, don't change anything because changing middle character will still create palindrome
		if (j === i) continue;
		// if char at i is not 'a', change to 'a' and return str
		if (str[i] !== 'a') {
			str[i] = 'a';
			return str.join('');
		}
	}
	// if no characters changed to 'a' to break paliyndrome, change last character to 'b' to be the next lexicographical string
	str[str.length - 1] = 'b';
	// return str
	return str.join('');
};

console.log(breakPalindrome('abccba') === 'aaccba');
console.log(breakPalindrome('a') === '');
