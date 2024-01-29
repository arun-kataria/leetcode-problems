/*

0/1 Knapsack Problem:
Imagine you're a thief and you've broken into a house to steal. The house has various items, 
each with its own value and weight. But you can only carry a limited weight in your knapsack (or backpack). 
You need to figure out the most valuable combination of items to steal without exceeding this weight limit.

Here's the catch: You can't take portions of an item. It's all or nothing—either you take the whole item 
or you leave it. That's why it's called the "0/1 Knapsack Problem" (0 means you don't take the item, 
and 1 means you take it).

*/
function knapsack(values, weights, capacity) {
  let n = values.length;
  // Initializing a 2D array/table for storing solutions to subproblems
  let dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= capacity; w++) {
      // If the weight of the item is less than or equal to the current capacity, w
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(
          values[i - 1] + dp[i - 1][w - weights[i - 1]], // taking the item
          dp[i - 1][w] // not taking the item
        );
      } else {
        // If the item's weight is more than w, then it can't be included
        dp[i][w] = dp[i - 1][w];
      }
    }
  }
  // The last cell will have the answer to the problem
  return dp[n][capacity];
}

// Example:
let values = [2, 3, 8, 4]; // items
let weights = [1, 3, 2, 2]; // items weight
let capacity = 5;
console.log(knapsack(values, weights, capacity));
