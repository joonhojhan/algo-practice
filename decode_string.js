/*
Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

Examples:

s = "3[a]2[bc]", return "aaabcbc".
s = "3[a2[c]]", return "accaccacc".
s = "2[abc]3[cd]ef", return "abcabccdcdcdef".
*/

const decodeString = function (s) {
	const stack = [[]];
	const num = [[]];
	for (let i = 0; i < s.length; i++) {
		const char = s[i];
		if (!isNaN(char)) {
			if (isNaN(s[i - 1])) num.push([]);
			num[num.length - 1].push(char);
		} else if (char === '[') stack.push([]);
		else if (char === ']') {
			const temp = stack.pop().join('').repeat(num.pop().join(''));
			stack[stack.length - 1].push(temp);
		} else {
			stack[stack.length - 1].push(char);
		}
	}
	return stack[0].join('');
};

console.log(decodeString('3[a]2[bc]') === 'aaabcbc');
console.log(decodeString('3[a2[c]]') === 'accaccacc');
console.log(decodeString('2[abc]3[cd]ef') === 'abcabccdcdcdef');
console.log(decodeString('100[leetcode]') === 'leetcode'.repeat(100));
