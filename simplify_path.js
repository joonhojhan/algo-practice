/*
Given a string that is a path to a file directory, simplify the path and return the new path.
".." would go to previous directory.
"." would stay in the same directory.
*/
const simplifyPath = function (str) {
	const res = [];
	const strArr = str.split('/');
	for (const el of strArr) {
		if (el === '..') res.pop();
		else if (el === '.') continue;
		else if (el !== '') {
			res.push(el);
		}
	}
	if (!res.length) return '/';
	return `/${res.join('/')}`;
};

console.log(simplifyPath('d/./g/a/d/../../../e') === '/d/e');
console.log(simplifyPath('abbb/d/../g') === '/abbb/g');
console.log(simplifyPath('a/d/./e/g') === '/a/d/e/g');
console.log(simplifyPath('a/./d/./e/g') === '/a/d/e/g');
console.log(simplifyPath('a/../d/g') === '/d/g');
console.log(simplifyPath('a/../e/../s/../e/./g') === '/e/g');
console.log(simplifyPath('a/../e/../s//..//e/./g') === '/e/g');
