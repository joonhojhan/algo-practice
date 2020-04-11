/*
Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.
*/
function groupAnagrams(strs) {
	const map = new Map();
	for (let i = 0; i < strs.length; i++) {
		const word = strs[i];
		const sortedString = word.split('').sort().join('');
		if (!map.has(sortedString)) {
			map.set(sortedString, [word]);
		} else {
			map.get(sortedString).push(word);
		}
	}
	return Array.from(map.values());
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])); // returns [["ate","eat","tea"],["nat","tan"],["bat"]]
