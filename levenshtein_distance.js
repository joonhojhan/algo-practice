/*
Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2.

You have the following 3 operations permitted on a word:

Insert a character
Delete a character
Replace a character
*/

const levenshteinDistance = (word1, word2) => {
	let table = [];
	let longer, shorter;
	if (word1.length > word2.length) {
		longer = word1;
		shorter = word2;
		for (let i = 0; i < word1.length + 1; i++) {
			table.push(Array(word2.length + 1).fill(0));
		}
	} else {
		longer = word2;
		shorter = word1;
		for (let i = 0; i < word2.length + 1; i++) {
			table.push(Array(word1.length + 1).fill(0));
		}
	}
	for (let i = 0; i < table[0].length; i++) {
		table[0][i] = i;
	}
	for (let i = 0; i < table.length; i++) {
		table[i][0] = i;
	}
	for (let i = 1; i < table.length; i++) {
		for (let j = 1; j < table[i].length; j++) {
			if (longer[i - 1] === shorter[j - 1]) {
				table[i][j] = table[i - 1][j - 1];
			} else {
				table[i][j] =
					Math.min(table[i - 1][j], table[i][j - 1], table[i - 1][j - 1]) + 1;
			}
		}
	}
	return table[table.length - 1][table[0].length - 1];
};

console.log(levenshteinDistance('abc', 'yabd'));
