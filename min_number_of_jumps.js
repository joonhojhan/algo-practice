/*
You are given a non-empty array of integers.
Each element represents the maximum number of steps you can take forward.
For example, if the element at index 1 is 3, you can go from index 1 to index 2, 3, or 4.
Write a function that returns the minimum number of jumps needed to reach the final index.
Note that jumping from index i to index i + x always constitutes 1 jump, no matter how large x is.
*/

const minNumberOfJumps = a => {
	// if length of array is 1, no jumps needed because you are at the end of the array
	if (a.length === 1) return 0;
	/*
	maxReach: variable for how far you can reach in the array
	steps: how many steps you have left to take before a jump
	jumps: return value for how many jumps taken
	*/
	let maxReach = a[0];
	let steps = a[0];
	let jumps = 0;
	// loop through array
	for (let i = 1; i < a.length - 1; i++) {
		// maxReach is set to the greater number between current maxReach and position in the array + value at position
		maxReach = Math.max(maxReach, a[i] + i);
		// decrement steps
		steps--;
		// if no steps left, you must jump
		if (steps === 0) {
			// increment jump
			jumps++;
			// set steps to how far you can reach in the array minus current index
			steps = maxReach - i;
		}
	}
	// return jumps plus 1 for initial jump from start
	return jumps + 1;
};

console.log(minNumberOfJumps([3, 4, 2, 1, 2, 3, 3, 1, 1, 1, 3]) === 5);
console.log(minNumberOfJumps([3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3]) === 4);
