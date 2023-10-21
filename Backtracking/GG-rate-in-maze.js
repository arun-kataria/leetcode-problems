/*
Rat in a Maze Problem - I
https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1

Consider a rat placed at (0, 0) in a square matrix of order N * N. It has to reach the destination at (N - 1, N - 1). 
Find all possible paths that the rat can take to reach from source to destination. 
The directions in which the rat can move are 'U'(up), 'D'(down), 'L' (left), 'R' (right). Value 0 at a cell in the matrix represents 
that it is blocked and rat cannot move to it while value 1 at a cell in the matrix represents that rat can be travel through it.
Note: In a path, no cell can be visited more than one time. If the source cell is 0, the rat cannot move to any other cell.

Example 1:

Input:
N = 4
m[][] = {{1, 0, 0, 0},
         {1, 1, 0, 1}, 
         {1, 1, 0, 0},
         {0, 1, 1, 1}}
Output:
DDRDRR DRDDRR
Explanation:
The rat can reach the destination at 
(3, 3) from (0, 0) by two paths - DRDDRR 
and DDRDRR, when printed in sorted order 
we get DDRDRR DRDDRR.

Example 2:
Input:
N = 2
m[][] = {{1, 0},
         {1, 0}}
Output:
-1
Explanation:
No path exists and destination cell is 
blocked.
Your Task:  
You don't need to read input or print anything. Complete the function printPath() which takes N and 2D array m[ ][ ] as input parameters 
and returns the list of paths in lexicographically increasing order.  
Note: In case of no path, return an empty list. The driver will output "-1" automatically.

Expected Time Complexity: O((3N^2)).
Expected Auxiliary Space: O(L * X), L = length of the path, X = number of paths.

Constraints:
2 ≤ N ≤ 5
0 ≤ m[i][j] ≤ 1

*/

function findPaths(m, n) {
    let visited = Array.from({ length: n }, () => Array(n).fill(false));
    let paths = [];
  
    function isSafe(x, y) {
      return (
        x >= 0 && x < n && y >= 0 && y < n && m[x][y] === 1 && !visited[x][y]
      );
    }
  
    function findPathUtil(x, y, path) {
      if (x === n - 1 && y === n - 1) {
        paths.push(path);
        //return;
      }
  
      // Mark the current cell as visited
      visited[x][y] = true;
  
      // Moving up
      if (isSafe(x - 1, y)) {
        findPathUtil(x - 1, y, path + "U");
      }
  
      // Moving right
      if (isSafe(x, y + 1)) {
        findPathUtil(x, y + 1, path + "R");
      }
  
      // Moving down
      if (isSafe(x + 1, y)) {
        findPathUtil(x + 1, y, path + "D");
      }
  
      // Moving left
      if (isSafe(x, y - 1)) {
        findPathUtil(x, y - 1, path + "L");
      }
  
      // Backtrack from the current cell
      visited[x][y] = false;
    }
  
    findPathUtil(0, 0, "");
  
    if (paths.length === 0) {
      return -1;
    } else {
      return paths.join(" ");
    }
  }
  
  // Example usage:
  let m = [
    [1, 0, 0, 0],
    [1, 1, 0, 1],
    [1, 1, 0, 0],
    [0, 1, 1, 1],
  ];
  let n = 4;
  console.log('*** Output  => ', findPaths(m, n););
  