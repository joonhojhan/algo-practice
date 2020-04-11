/*
In a town, there are N people labelled from 1 to N.  There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:

The town judge trusts nobody.
Everybody (except for the town judge) trusts the town judge.
There is exactly one person that satisfies properties 1 and 2.
You are given trust, an array of pairs trust[i] = [a, b] representing that the person labelled a trusts the person labelled b.

If the town judge exists and can be identified, return the label of the town judge.  Otherwise, return -1.



Example 1:

Input: N = 2, trust = [[1,2]]
Output: 2
Example 2:

Input: N = 3, trust = [[1,3],[2,3]]
Output: 3
Example 3:

Input: N = 3, trust = [[1,3],[2,3],[3,1]]
Output: -1
Example 4:

Input: N = 3, trust = [[1,2],[2,3]]
Output: -1
Example 5:

Input: N = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]
Output: 3
*/

const findJudge = function (N, trust) {
	if (!trust.length) return N;
	const trustHash = new Map(); // hash for potential judges
	const personHash = new Set([]); // set to keep track of people in town
	const n = trust.length;
	let res = -1;
	for (let i = 0; i < n; i++) {
		const person = trust[i];
		// keep track of how many people trust the potential judge
		if (!trustHash.get(person[1])) {
			trustHash.set(person[1], 1);
		} else {
			trustHash.set(person[1], trustHash.get(person[1]) + 1);
		}
		// keep track of people in town
		if (!personHash.has(person[0])) {
			personHash.add(person[0]);
		}
	}
	// for each potential judge, if the number of people that trust the potential judge is equal to the number of people in town and this potential judge does not exist in town, set result to this potential judge
	trustHash.forEach((val, key) => {
		if (val === N - 1 && !personHash.has(Number(key))) {
			res = Number(key);
		}
	});
	return res;
};

console.log(findJudge(2, [[1, 2]]) === 2);
console.log(
	findJudge(3, [
		[1, 3],
		[2, 3],
	]) === 3
);
console.log(
	findJudge(3, [
		[1, 3],
		[2, 3],
		[3, 1],
	]) === -1
);
console.log(
	findJudge(3, [
		[1, 2],
		[2, 3],
	]) === -1
);
console.log(
	findJudge(4, [
		[1, 3],
		[1, 4],
		[2, 3],
		[2, 4],
		[4, 3],
	]) === 3
);
