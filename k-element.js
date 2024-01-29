class MinHeap {
  constructor() {
    this.heap = [];
  }

  // Insert an element into the heap
  push(val) {
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1);
  }

  // Remove and return the smallest element from the heap
  pop() {
    const smallest = this.heap[0];
    // Set the first element to the last element in the heap
    this.heap[0] = this.heap.pop();
    // Re-adjust the heap to maintain the min-heap property
    this.bubbleDown(0);
    return smallest;
  }

  // Get the number of elements in the heap
  size() {
    return this.heap.length;
  }

  // Get the smallest element from the heap
  top() {
    return this.heap[0];
  }

  // Move a node up in the heap until the min-heap property is restored
  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      // If the parent is less or equal, the heap is in order
      if (this.heap[parentIndex] <= this.heap[index]) {
        break;
      }
      // Swap the current element with its parent
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      // Move up to the parent's index
      index = parentIndex;
    }
  }

  // Move a node down in the heap until the min-heap property is restored
  bubbleDown(index) {
    const lastIndex = this.heap.length - 1;
    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let smallestChildIndex = index;

      // Find which child is smaller, left or right
      if (
        leftChildIndex <= lastIndex &&
        this.heap[leftChildIndex] < this.heap[smallestChildIndex]
      ) {
        smallestChildIndex = leftChildIndex;
      }
      if (
        rightChildIndex <= lastIndex &&
        this.heap[rightChildIndex] < this.heap[smallestChildIndex]
      ) {
        smallestChildIndex = rightChildIndex;
      }

      // If the smallest child is still the current index, the heap is in order
      if (smallestChildIndex === index) {
        break;
      }

      // Swap the current element with the smallest child
      [this.heap[index], this.heap[smallestChildIndex]] = [
        this.heap[smallestChildIndex],
        this.heap[index],
      ];
      // Move down to the smallest child's index
      index = smallestChildIndex;
    }
  }
}

function findNthLargest(nums, n) {
  const minHeap = new MinHeap();
  for (let num of nums) {
    // If the heap doesn't have 'n' elements yet, just add the new number
    if (minHeap.size() < n) {
      minHeap.push(num);
    } else if (num > minHeap.top()) {
      // If the new number is larger than the smallest in the heap, remove the smallest
      minHeap.pop();
      // And add the new number to the heap
      minHeap.push(num);
    }
  }
  // The top of the min-heap is the nth largest element
  return minHeap.top();
}

// Example usage
console.log(findNthLargest([3, 2, 1, 5, 6, 4], 2)); // Should output 5
