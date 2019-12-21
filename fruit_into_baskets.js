/*
In a row of trees, the i-th tree produces fruit with type tree[i].

You start at any tree of your choice, then repeatedly perform the following steps:

Add one piece of fruit from this tree to your baskets.  If you cannot, stop.
Move to the next tree to the right of the current tree.  If there is no tree to the right, stop.
Note that you do not have any choice after the initial choice of starting tree: you must perform step 1, then step 2, then back to step 1, then step 2, and so on until you stop.

You have two baskets, and each basket can carry any quantity of fruit, but you want each basket to only carry one type of fruit each.

What is the total amount of fruit you can collect with this procedure?
*/
const totalFruit = function(fruits) {
	let seen = {};
	let ans = 0;
	let window = 0;
	for (let i = 0; i < fruits.length; i++) {
		let fruit = fruits[i];
		if (seen[fruit]) seen[fruit]++;
		else seen[fruit] = 1;
		while (Object.keys(seen).length > 2) {
			seen[fruits[window]]--;
			if (!seen[fruits[window]]) delete seen[fruits[window]];
			window++;
		}
		ans = Math.max(ans, i - window + 1);
	}
	return ans;
};

console.log(totalFruit([1, 2, 1]) === 3);
console.log(totalFruit([0, 1, 2, 2]) === 3);
console.log(totalFruit([1, 2, 3, 2, 2]) === 4);
console.log(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]) === 5);
