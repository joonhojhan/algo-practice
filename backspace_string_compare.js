/*
Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Example 1:

Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".
Example 2:

Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".
Example 3:

Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".
Example 4:

Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".
*/
// Using stack, O(n) time and O(n) space
/*
const backspaceCompare = function(S, T) {
	let computedS = [];
	let computedT = [];
	for (let i = 0; i < S.length; i++) {
			if (S[i] !== '#') {
					computedS.push(S[i]);
			}
			else if (computedS.length) {
					computedS.pop()
			}
	}
	for (let i = 0; i < T.length; i++) {
			if (T[i] !== '#') {
					computedT.push(T[i]);
			}
			else if (computedT.length) {
					computedT.pop()
			}
	}
	return computedS.join('') === computedT.join('')
};
*/

// O(n) time, O(1) space
const backspaceCompare = function (S, T) {
	let Si = S.length - 1;
	let Ti = T.length - 1;
	let skipS = 0;
	let skipT = 0;
	while (Si >= 0 || Ti >= 0) {
		while (Si >= 0) {
			if (S[Si] === '#') {
				skipS++;
				Si--;
			} else if (skipS > 0) {
				skipS--;
				Si--;
			} else {
				break;
			}
		}
		while (Ti >= 0) {
			if (T[Ti] === '#') {
				skipT++;
				Ti--;
			} else if (skipT > 0) {
				skipT--;
				Ti--;
			} else {
				break;
			}
		}
		if (Si >= 0 && Ti >= 0 && S[Si] !== T[Ti]) {
			return false;
		}
		if (Si >= 0 !== Ti >= 0) {
			return false;
		}
		Si--;
		Ti--;
	}
	return true;
};

console.log(backspaceCompare('ab#c', 'ab#c') === true);
console.log(backspaceCompare('ab##', 'c#d#') === true);
console.log(backspaceCompare('a##c', '#a#c') === true);
console.log(backspaceCompare('a#c', 'b') === false);
