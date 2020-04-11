/*
Given a collection of distinct integers, return all possible permutations.
*/
const permute = (nums) => {
	let results = [[nums.shift()]];
	while (nums.length) {
		const nextEl = nums.shift();
		const currentResults = [];
		for (let i = 0; i < results.length; i++) {
			for (let j = 0; j <= results[i].length; j++) {
				currentResults.push([
					...results[i].slice(0, j),
					nextEl,
					...results[i].slice(j),
				]);
			}
		}
		results = currentResults;
	}
	return results;
};

console.log(permute(['1', '2', '3']));
