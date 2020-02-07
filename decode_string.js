const decodeString = function(s) {
	let stack = [[]];
	let num = [[]];
	for (let i = 0; i < s.length; i++) {
		let char = s[i];
		if (!isNaN(char)) {
			if (isNaN(s[i - 1])) num.push([]);
			num[num.length - 1].push(char);
		} else if (char === '[') stack.push([]);
		else if (char === ']') {
			let temp = stack
				.pop()
				.join('')
				.repeat(num.pop().join(''));
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
