/*
Given a string, determine if the input string is valid and all brackets, braces, and parentheses are balanced.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.
*/
function isValid(s) {
	let opening = new Set(['(', '[', '{']);
	let pairs = {
		')': '(',
		']': '[',
		'}': '{',
	};
	let openStack = [];
	for (let char of s) {
		if (opening.has(char)) openStack.push(char);
		else if (char in pairs) {
			let currOpening = openStack.pop();
			let currMatch = pairs[char];
			if (currOpening !== currMatch) return false;
		}
	}
	return !openStack.length;
}

console.log(isValid('(text ( is allowed ){rww{}r{[]}()}w()rrww [] ()})') === false);
console.log(isValid('(text ( is allowed ){rww{}r{[]()}w()rrww [] ()})') === true);
console.log(isValid('text ( is allowed ){rwwrwrrww [] ()}') === true);
console.log(isValid('(){}[]') === true);
console.log(isValid('({[(){}]})') === true);
console.log(isValid('(') === false);
console.log(isValid('') === true);
console.log(isValid('({[()){}]})') === false);
