/*
Given n non-negative integers representing an elevation map where the width
of each bar is 1, compute how much water it is able to trap after raining.
*/

const trap = (height) => {
	// initialize pointers for left and right idx, total trapped water, and max left and right heights
	let left = 0;
	let right = height.length - 1;
	let leftMax = 0;
	let rightMax = 0;
	let total = 0;
	// while left idx is less than right idx
	while (left < right) {
		// if left height is less than right height
		if (height[left] < height[right]) {
			// set leftMax to left height if left height is greater than the current left max, else add to total trapped water
			if (height[left] >= leftMax) {
				leftMax = height[left];
			} else {
				total += leftMax - height[left];
			}
			// increment left idx
			left++;
			// if right height is less than left height
		} else {
			// set right max to right height if right height is greater than the current right max, else add to total trapped water
			if (height[right] >= rightMax) {
				rightMax = height[right];
			} else {
				total += rightMax - height[right];
			}
			// decrement right idx
			right--;
		}
	}
	// return total trapped water
	return total;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]) === 6);
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 4, 1, 0, 0]));
console.log(trap([5, 1, 7, 0, 1, 10, 0, 3, 6, 1, 2, 5]));
