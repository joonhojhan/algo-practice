/*
Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2.

You have the following 3 operations permitted on a word:

Insert a character
Delete a character
Replace a character
*/

const levenshteinDistance = (word1, word2) => {
	// create dp table
	let table = [];
	// initialize variables to keep track of which word is longer
	let longer, shorter;
	// word1 is longer
	if (word1.length > word2.length) {
		longer = word1;
		shorter = word2;
		// initialize table with shorter as the table width
		for (let i = 0; i < word1.length + 1; i++) {
			table.push(Array(word2.length + 1).fill(0));
		}
	} else {
		longer = word2;
		shorter = word1;
		// initialize table with shorter as the table width
		for (let i = 0; i < word2.length + 1; i++) {
			table.push(Array(word1.length + 1).fill(0));
		}
	}
	// initialize first row for calculation
	for (let i = 0; i < table[0].length; i++) {
		table[0][i] = i;
	}
	// initialize first column for calculation
	for (let i = 0; i < table.length; i++) {
		table[i][0] = i;
	}
	// for each position in table excluding the initial row and column
	for (let i = 1; i < table.length; i++) {
		for (let j = 1; j < table[i].length; j++) {
			// if the characters being checked are equal
			if (longer[i - 1] === shorter[j - 1]) {
				// set table poition to be equal to the position diagonally above and before
				table[i][j] = table[i - 1][j - 1];
				// if characters being checked are not equal
			} else {
				// set table position to be the min of the above, before, and diagonally above and before it
				table[i][j] =
					Math.min(table[i - 1][j], table[i][j - 1], table[i - 1][j - 1]) + 1;
			}
		}
	}
	// return the last element in the table for minimum edit distance (levenshtein distance)
	return table[table.length - 1][table[0].length - 1];
};

console.log(levenshteinDistance('abc', 'yabde'));
