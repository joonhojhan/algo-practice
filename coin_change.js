/*
You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

Example 1:

Input: coins = [1, 2, 5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Note:
You may assume that you have an infinite number of each kind of coin.
*/

const coinChange = (coins, amount) => {
	let minCoins = [0];
	for (let i = 0; i < amount; i++) {
		minCoins.push(Infinity);
	}
	for (let i = 1; i <= amount; i++) {
		for (let j = 0; j < coins.length; j++) {
			if (coins[j] <= i)
				minCoins[i] = Math.min(minCoins[i], minCoins[i - coins[j]] + 1);
		}
	}
	return minCoins[amount] > amount ? -1 : minCoins[amount];
};

console.log(coinChange([1, 2, 5], 11) === 3);
console.log(coinChange([2], 3) === -1);
