/*
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
*/

// brute force O(N^3)
/*
const isPalindrome = function(str) {
	let left = 0,
		right = str.length - 1;
	while (left < right) {
		if (str[left] !== str[right]) return false;
		left++;
		right--;
	}
	return true;
};

const longestPalindrome = function(s) {
	let longest = '';
	for (let i = 0; i < s.length; i++) {
		for (let j = i + 1; j <= s.length; j++) {
			let curr = s.slice(i, j);
			if (isPalindrome(curr) && curr.length > longest.length) longest = curr;
		}
	}
	return longest;
};
*/

const getLongestPalindrome = function(str, left, right) {
	while (left >= 0 && right < str.length) {
		if (str[left] !== str[right]) break;
		left--;
		right++;
	}
	return [left + 1, right];
};

const longestPalindrome = function(s) {
	let currLongest = [0, 1];
	for (let i = 0; i < s.length; i++) {
		let odd = getLongestPalindrome(s, i - 1, i + 1);
		let even = getLongestPalindrome(s, i, i + 1);
		let longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
		currLongest =
			currLongest[1] - currLongest[0] > longest[1] - longest[0]
				? currLongest
				: longest;
	}
	return s.slice(currLongest[0], currLongest[1]);
};

console.log(longestPalindrome('a'));
console.log(longestPalindrome('babbab'));
console.log(longestPalindrome('babba'));
console.log(longestPalindrome('iamapalindromemordnilapamai'));
console.log(
	longestPalindrome(
		'jglknendplocymmvwtoxvebkekzfdhykknufqdkntnqvgfbahsljkobhbxkvyictzkqjqydczuxjkgecdyhixdttxfqmgksrkyvopwprsgoszftuhawflzjyuyrujrxluhzjvbflxgcovilthvuihzttzithnsqbdxtafxrfrblulsakrahulwthhbjcslceewxfxtavljpimaqqlcbrdgtgjryjytgxljxtravwdlnrrauxplempnbfeusgtqzjtzshwieutxdytlrrqvyemlyzolhbkzhyfyttevqnfvmpqjngcnazmaagwihxrhmcibyfkccyrqwnzlzqeuenhwlzhbxqxerfifzncimwqsfatudjihtumrtjtggzleovihifxufvwqeimbxvzlxwcsknksogsbwwdlwulnetdysvsfkonggeedtshxqkgbhoscjgpiel'
	)
);
console.log(
	longestPalindrome(
		'0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
	)
);
