/*
322. Coin Change

You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
You may assume that you have an infinite number of each kind of coin.

Example 1:

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Example 3:

Input: coins = [1], amount = 0
Output: 0
*/

function coinChange(coins, amount) {
  const max = amount + 1;
  let dp = {};
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      console.log("coins:  ", coins[j]);
      if (coins[j] <= i) {
        console.log("dp[i - coins[j]]: ", dp[i - coins[j]]);
        dp[i] = Math.min(dp[i] ? dp[i] : max, dp[i - coins[j]] + 1);
      }
    }
  }

  return dp[amount] > amount ? -1 : dp[amount];
}
// function coinChange(coins, amount) {
//   const memo = new Map();

//   function dp(n) {
//     // Check our memo map to see if we have already calculated dp(n)
//     if (memo.has(n)) return memo.get(n);
//     // Base case: if n is 0, no coins are needed.
//     if (n === 0) return 0;
//     // Base case: if n is less than 0, no solution exists.
//     if (n < 0) return -1;

//     let minCoins = Infinity;
//     // Try removing each coin from the total amount and see how many coins are needed for the remaining amount.
//     for (const coin of coins) {
//       const res = dp(n - coin);
//       // If res is not -1, we can use the current coin.
//       if (res >= 0) {
//         minCoins = Math.min(minCoins, 1 + res);
//       }
//     }

//     // Update memo with the minimum coins needed for amount n.
//     minCoins = minCoins === Infinity ? -1 : minCoins;
//     memo.set(n, minCoins);
//     return minCoins;
//   }

//   return dp(amount);
// }

// Example usage:
console.log(coinChange([1, 2, 5], 11)); // Output: 3
console.log(coinChange([2], 3)); // Output: -1
//console.log(coinChange([1], 0)); // Output: 0
