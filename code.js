/**
 * @param {number[]} array which will be mutated in place.
 */
function quicksort(array) {
  const stack = []; // 4 keeping track of whatever subarrays need to be sorted.
  // [startIndex, endIndex] for section which needs to be partitioned. Kinda like a tuple.
  stack.push([0, array.length - 1]);

  // While we still need to partition the array we will have values in stack.
  while (stack.length > 0) {
    const [start, end] = stack.pop();

    if (start > end) continue; // already sorted propery.

    const pivot = partition(array, start, end);

    stack.push([start, pivot - 1]);
    stack.push([pivot, end]);
  }

  return array;
}

function partition(array, start, end) {
  const pivot = array[end];
  let i = start - 1;

  // Foreach subarray, swap out of place elements from the pivot to the end of the section
  for (let j = start; j < end; j++) {
    if (array[j] <= pivot) {
      i++;
      swap(array, i, j);
    }
  }

  swap(array, i + 1, end);
  return i;
}

function swap(arr, a, b) {
  const tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
}
