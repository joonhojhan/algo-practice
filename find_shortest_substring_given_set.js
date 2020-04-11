/*
Given a string and a set of characters, return the shortest substring containing all the characters in the set.

For example, given the string "figehaeci" and the set of characters {a, e, i}, you should return "aeci".

If there is no substring containing all the characters in the set, return null.
*/

const findSubstring = function (str, set) {
	let shortest = `${str} `;
	const n = str.length;
	for (let i = 0; i < n; i++) {
		for (let j = i + set.size; j < n + 1; j++) {
			const currSubstring = str.slice(i, j);
			const m = currSubstring.length;
			const temp = new Set(set);
			let reassigned = false;
			for (let k = 0; k < m; k++) {
				const char = currSubstring[k];
				if (temp.has(char)) {
					temp.delete(char);
				}
				if (!temp.size) {
					if (shortest.length > currSubstring.length) {
						reassigned = true;
						shortest = currSubstring;
					}
					break;
				}
			}
			if (reassigned) {
				reassigned = false;
				break;
			}
		}
	}
	return shortest.length === n + 1 ? null : shortest;
};

console.log(findSubstring('figehaeci', new Set(['a', 'e', 'i'])) === 'aeci');

console.log(findSubstring('aei', new Set(['a', 'e', 'i'])) === 'aei');

console.log(findSubstring('aeii', new Set(['a', 'e', 'i'])) === 'aei');

console.log(findSubstring('aaeii', new Set(['a', 'e', 'i'])) === 'aei');

console.log(
	findSubstring('aseeeueihnvxkajbifsiduefnkai', new Set(['a', 'e', 'i'])) ===
		'efnkai'
);

console.log(
	findSubstring(
		'aekjsdlkfjksdhfkjslkdhfksdljfsdhfkldjfi',
		new Set(['a', 'e', 'i'])
	) === 'aekjsdlkfjksdhfkjslkdhfksdljfsdhfkldjfi'
);

console.log(findSubstring('aaeii', new Set(['a', 'e', 'i'])) === 'aei');

console.log(findSubstring('', new Set(['a', 'e', 'i'])) === null);
