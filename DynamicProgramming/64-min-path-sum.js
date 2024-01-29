/*
64. Minimum Path Sum:
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Example 1:
Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
Output: 7
Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.

Example 2:
Input: grid = [[1,2,3],[4,5,6]]
Output: 12
 
Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 200
0 <= grid[i][j] <= 200
*/

function minPathSum(grid) {
  let m = grid.length;
  let n = grid[0].length;

  // Initialize the first cell
  for (let i = 1; i < m; i++) {
    grid[i][0] += grid[i - 1][0];
  }

  // Initialize the first row
  for (let j = 1; j < n; j++) {
    grid[0][j] += grid[0][j - 1];
  }

  // Fill up the DP table
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
    }
  }

  return grid[m - 1][n - 1];
}

// Example usage:
console.log(
  minPathSum([
    [1, 3, 1],
    [1, 1, 5],
    [4, 2, 1],
  ])
); // Output: 7
console.log(
  minPathSum([
    [1, 2, 3],
    [4, 5, 6],
  ])
); // Output: 12
