/**
 * @param {number[]} array which will be mutated in place.
 */
function quicksort(array) {
  const stack = []; // keeping track of subarrays that need to be sorted.
  // [startIndex, endIndex] for section which needs to be partitioned.
  stack.push([0, array.length - 1]); // by default we need to sort everything in array

  while (stack.length > 0) {
    const [start, end] = stack.pop();
    if (start >= end) continue; // already sorted properly.

    const pivotIndex = partition(array, start, end);

    if (start < pivotIndex - 1) stack.push([start, pivotIndex - 1]);
    if (pivotIndex + 1 < end) stack.push([pivotIndex + 1, end]);
  }

  return array;
}

/**
 * @param {number[]} array
 * @param {number} start
 * @param {number} end
 * @returns {number}
 */
function partition(array, start, end) {
  const pivot = array[end];
  let i = start;

  for (let j = start; j < end; j++) {
    if (array[j] < pivot) {
      swap(array, i, j);
      i++;
    }
  }

  swap(array, i, end);
  return i;
}

function swap(arr, a, b) {
  const tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
}
