/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
*/
function backtrack(right, left, curr, res) {
	if (!right && !left) {
		res.push(curr);
		return;
	}
	if (left) backtrack(right, left - 1, `${curr} (`, res);
	if (right > left) backtrack(right - 1, left, `${curr} )`, res);
}
const generateParenthesis = (n) => {
	const left = n;
	const right = n;
	const curr = '';
	const res = [];
	backtrack(right, left, curr, res);
	return res;
};

console.log(generateParenthesis(3));
