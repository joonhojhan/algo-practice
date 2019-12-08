/*
Given a string, determine if the input string is valid and all brackets, braces, and parentheses are balanced.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.
*/
const isValid = function(s) {
	let pairs = {
		'(': ')',
		'[': ']',
		'{': '}',
	};
	let stack = [];
	for (let i = 0; i < s.length; i++) {
		let char = s[i];
		if (pairs[char]) stack.push(char);
		else {
			let inPairs = false;
			for (let el in pairs) {
				if (pairs[el] === char) inPairs = true;
			}
			if (!inPairs) continue;
			let popped = stack.pop();
			if (pairs[popped] !== char) return false;
		}
	}
	return !stack.length;
};

console.log(isValid('(text ( is allowed ){rww{}r{[]}()}w()rrww [] ()})') === false);
console.log(isValid('(text ( is allowed ){rww{}r{[]()}w()rrww [] ()})') === true);
console.log(isValid('text ( is allowed ){rwwrwrrww [] ()}') === true);
console.log(isValid('(){}[]') === true);
console.log(isValid('({[(){}]})') === true);
console.log(isValid('(') === false);
console.log(isValid('') === true);
console.log(isValid('({[()){}]})') === false);
