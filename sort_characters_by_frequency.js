/*
Given a string, sort it in decreasing order based on the frequency of characters.

Example 1:

Input:
"tree"

Output:
"eert"

Explanation:
'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
Example 2:

Input:
"cccaaa"

Output:
"cccaaa"

Explanation:
Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
Note that "cacaca" is incorrect, as the same characters must be together.
Example 3:

Input:
"Aabb"

Output:
"bbAa"

Explanation:
"bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.
*/
const frequencySort = function (s) {
	const memo = Array(95);
	const offSet = ' '.charCodeAt();
	for (const char of s) {
		const pos = char.charCodeAt() - offSet;
		if (memo[pos]) memo[pos].freq++;
		else memo[pos] = { char, freq: 1 };
	}
	memo.sort((a, b) => b.freq - a.freq);
	let res = '';
	let i = 0;
	while (memo[i]) {
		res += memo[i].char.repeat(memo[i].freq);
		i++;
	}
	return res;
};

console.log(frequencySort('tree') === 'eetr' || frequencySort('tree') === 'eert');
console.log(
	frequencySort('cccaaa') === 'cccaaa' || frequencySort('cccaaa') === 'aaaccc'
);
console.log(frequencySort('Aabb') === 'bbAa' || frequencySort('Aabb') === 'bbaA');
