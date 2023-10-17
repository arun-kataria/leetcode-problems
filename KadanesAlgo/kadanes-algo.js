function kadanesAlgo(a) {
  let size = a.length,
    max_sum = -Math.pow(2, 53) - 1,
    current_max = 0,
    startIndex,
    endIndex;

  for (let i = 0; i < size; i++) {
    current_max = current_max + a[i];
    if (max_sum < current_max) {
      max_sum = current_max;
      endIndex = i;
    }

    if (current_max < 0) {
      current_max = 0;
      if (a.length - 1 != i) startIndex = i + 1;
      else startIndex = i;
    }
  }
  return max_sum;
}

console.log(kadanesAlgo([-2, -3, 4, -1, -2, 1, 5, -3]));
