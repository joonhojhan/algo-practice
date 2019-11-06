/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
*/
const generateParenthesis = n => {
	let left = n,
		right = n,
		curr = '';
	let res = [];
	backtrack(right, left, curr, res);
	return res;
};

function backtrack(right, left, curr, res) {
	if (!right && !left) {
		res.push(curr);
		return;
	}
	if (left) backtrack(right, left - 1, curr + '(', res);
	if (right > left) backtrack(right - 1, left, curr + ')', res);
}

console.log(generateParenthesis(3));
