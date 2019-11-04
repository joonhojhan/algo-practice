/*
Given a non-empty array of integers, return the k most frequent elements.

Note:
You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

O(n) space
O(nk) time
*/
const topKFrequent = function(nums, k) {
	const freq = {};
	for (let num of nums) {
		if (freq[num]) freq[num]++;
		else freq[num] = 1;
	}
	let results = [];
	while (results.length < k) {
		let mostFreq = null;
		let compare = null;
		for (let el in freq) {
			if (freq[el] > compare) {
				compare = freq[el];
				mostFreq = el;
			}
		}
		delete freq[mostFreq];
		results.push(mostFreq);
	}
	return results;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequent([3, 0, 1, 0], 1));
console.log(
	topKFrequent([1, 2, 2, 7, 8, 9, 3, 5, 5, 3, 2, 4, 6, 7, 1, 5, 5, 5, 5, 5], 3)
);
