/*
Given an input array of arrays of 2 integers, the first integer representing
the birth year and the second integer representing the death year, return
an integer representing the year with the max population.
*/

// Brute force approach
// O(YP) where Y is the difference of the max death year and min birth year, P is the length of the input
// const maxPopulation = function (years) {
// 	let minYear = Infinity;
// 	let maxYear = -Infinity;
// 	const n = years.length;
// 	for (let i = 0; i < n; i++) {
// 		minYear = Math.min(minYear, years[i][0]);
// 		maxYear = Math.max(maxYear, years[i][1]);
// 	}
// 	const allYears = Array(maxYear - minYear).fill(0);
// 	let maxPopulationYear;
// 	let currMaxPopulation = -Infinity;
// 	const offset = minYear;
// 	for (let i = minYear; i < maxYear; i++) {
// 		for (let j = 0; j < n; j++) {
// 			const currBirth = years[j][0];
// 			const currDeath = years[j][1];
// 			if (i < currDeath && i >= currBirth) allYears[i - offset]++;
// 		}
// 		if (currMaxPopulation < allYears[i - offset]) {
// 			currMaxPopulation = allYears[i - offset];
// 			maxPopulationYear = i;
// 		}
// 	}
//	return maxPopulationYear
// };

// Slightly better than brute force approach
// O(N^2) Time
// const maxPopulation = function (years) {
// 	let maxPopulationYear;
// 	let population = 0;
// 	const n = years.length;
// 	for (let i = 0; i < n; i++) {
// 		const birth = years[i][0];
// 		const death = years[i][1];
// 		let currPopulation = 0;
// 		for (let j = 0; j < n; j++) {
// 			const currBirth = years[j][0];
// 			const currDeath = years[j][1];
// 			if (currBirth <= birth && currDeath > death) currPopulation++;
// 		}
// 		if (currPopulation > population) {
// 			population = currPopulation;
// 			maxPopulationYear = birth;
// 		}
// 	}
// 	return maxPopulationYear;
// };

// Optimized
// O(n + m) Time where n is the length of the input array and m is the range from min birth year to max birth year
const maxPopulation = function (years) {
	const n = years.length;
	let minBirthYear = Infinity;
	let maxBirthYear = -Infinity;
	for (let i = 0; i < n; i++) {
		minBirthYear = Math.min(minBirthYear, years[i][0]);
		maxBirthYear = Math.max(maxBirthYear, years[i][1]);
	}
	const birthYears = Array(maxBirthYear - minBirthYear).fill(0);
	const m = birthYears.length;
	const offset = minBirthYear;
	for (let i = 0; i < n; i++) {
		const currBirthYear = years[i][0];
		const currDeathYear = years[i][1];
		birthYears[currBirthYear - offset]++;
		if (currDeathYear < maxBirthYear) birthYears[currDeathYear - offset]--;
	}
	let currPopulation = 0;
	let population = -Infinity;
	let res;
	for (let i = 0; i < m; i++) {
		const curr = birthYears[i];
		currPopulation += curr;
		if (currPopulation > population) {
			population = currPopulation;
			res = i + offset;
		}
	}
	return res;
};

console.log(
	maxPopulation([
		[2000, 2010],
		[1975, 2005],
		[1975, 2003],
		[1803, 1809],
		[1750, 1869],
		[1840, 1935],
		[1803, 1921],
		[1894, 1921],
	])
);
