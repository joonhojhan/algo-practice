/*
Write a function that takes in two non-empty arrays of integers. The function should find the pair of numbers (one from the first array, one from the second array) whose absolute difference is closest to zero. The function should return an array containing these two numbers, with the number from the first array in the first position. Assume that there will only be one pair of numbers with the smallest difference.
*/

const smallestDifference = function(arrayOne, arrayTwo) {
	// Write your code here.
	let min = Infinity;
	let res = [];
	let current = Infinity;
	arrayOne.sort((a, b) => a - b);
	arrayTwo.sort((a, b) => a - b);
	let idx1 = 0;
	let idx2 = 0;
	while (idx1 < arrayOne.length && idx2 < arrayTwo.length) {
		let firstNum = arrayOne[idx1];
		let secondNum = arrayTwo[idx2];
		if (firstNum < secondNum) {
			current = secondNum - firstNum;
			idx1++;
		} else if (secondNum < firstNum) {
			current = firstNum - secondNum;
			idx2++;
		} else return [firstNum, secondNum];
		if (current < min) {
			min = Math.min(min, current);
			res = [firstNum, secondNum];
		}
	}
	return res;
};

console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17])); // [28,26]
console.log(
	smallestDifference([240, 124, 86, 111, 2, 84, 954, 27, 89], [1, 3, 954, 19, 8])
); // [954,954]
