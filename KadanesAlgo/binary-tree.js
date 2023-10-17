/*
Question:
Given a binary tree, find the maximum sum path. The path may start and end at any node in the tree.

Example:

css
Copy code
Input:
       10
      /  \
     2   10
    / \   \
   20  1   -25
             /  \
            3    4
Output: 42 (The maximum sum path is 20 -> 2 -> 10 -> 10)

Provide a solution using Kadane's algorithm approach to solve this problem in JavaScript.
Answer:
To find the maximum sum path in a binary tree using Kadane’s Algorithm, we can convert the problem into a one-dimensional array problem.

For each node in the binary tree:

Convert the subtree rooted at the current node to an array of values using an in-order traversal.
Apply Kadane’s Algorithm to find the maximum subarray sum.
Compare this sum to the maximum found so far.
However, this approach has a high time complexity. A better approach would be to combine Kadane's idea with a bottom-up traversal of the binary tree.

*/

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

let maxSum = Number.MIN_SAFE_INTEGER;

function findMaxUtil(root) {
  if (!root) return 0;

  // Find maximum sum in left and right subtrees
  let left = findMaxUtil(root.left);
  let right = findMaxUtil(root.right);

  // Find maximum possible value starting from the current node
  let maxSingle = Math.max(Math.max(left, right) + root.val, root.val);

  // Find maximum sum path "through" the current node
  let maxTop = Math.max(maxSingle, left + right + root.val);

  // Update maxSum if needed
  maxSum = Math.max(maxSum, maxTop);

  return maxSingle;
}

function findMaxSum(root) {
  findMaxUtil(root);
  return maxSum;
}

// Example Usage
let root = new TreeNode(10);
root.left = new TreeNode(2);
root.right = new TreeNode(10);
root.left.left = new TreeNode(20);
root.left.right = new TreeNode(1);
root.right.right = new TreeNode(-25);
root.right.right.left = new TreeNode(3);
root.right.right.right = new TreeNode(4);

console.log(findMaxSum(root)); // Outputs: 42
