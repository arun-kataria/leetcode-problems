var orangesRotting = function (grid) {
  //Initialize queue for our BFS, Number of fresh oranges, and time to be returned.
  let queue = [],
    oranges = 0,
    time = 0;

  //Traverse matrix.  If we find a fresh orange, increment orange count.
  //If we find a rotten one, add it to the queue.
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c] === 1) oranges++;
      else if (grid[r][c] === 2) queue.push([r, c, 0]);
    }
  }

  const dirs = [
    [0, 1], // row and coloumn ->right
    [1, 0], // row and coloumn ->down
    [0, -1], // row and coloumn ->left
    [-1, 0], // row and coloumn ->up
  ];
  const endR = grid.length - 1,
    endC = grid[0].length - 1;

  //Loop while queue is not empty and there are still fresh oranges.
  while (queue.length && oranges) {
    const [curR, curC, mins] = queue.shift();

    if (grid[curR][curC] === 1) {
      grid[curR][curC] = 2;
      oranges--;
      time = mins;
    }

    for (let [addR, addC] of dirs) {
      const [newR, newC] = [curR + addR, curC + addC];

      if (newR < 0 || newR > endR || newC < 0 || newC > endC) continue;

      if (grid[newR][newC] === 1) {
        queue.push([newR, newC, mins + 1]);
      }
    }
  }

  return oranges ? -1 : time;
};

orangesRotting([
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
]);
