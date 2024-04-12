[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/ZLHpg3lN)

# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make qicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

**Analysis**

My implimentation of this function should provide a worst-case runtime complexity of $\Theta(n^2)$.
Here is my breakdown:

**Swap Function**

```js
function swap(arr, a, b) {
  const tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
}
```

The swap function is super simple and has a negligable impact on the complexity. It simply does 3 constant operations giving a runtime complexity of $\Theta(3)$. which simplifies to $\Theta(1)$. As the input size grows this will have the same effect. Thus we can ignore it.

**Partition**

```js
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
```

This function has a worst-case complexity of $\Theta(n)$. We iterate from **_start_** to **_end_** meaning on the first call we will be iterating $n$ times and on subsequent times we will iterate less and less. This means for each call we will be iterating over each subarray which is passed in.

**Quicksort**

```js
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
```

Lastly we have the main function. This function will do some constant operations which we will ignore as it's only called once and the size of the input does not effect the constant operations. However when considering the worst-case scenario, it would mean the array is sorted in decreasing order. This would mean we would need to run the `partition()` function for both the **left** and **right** subarrays. These arrays will keep getting cut in half, but in a worst case context this means we will iterate a total of $n$ iterations where in each of those iterations we run $n$ times.

**Conclusion**

Therefore my conclusion is that we will have a worst-case time complexity of $\Theta(n^2)$ when the array is given in decreasing order.

## Resources

I heavily used the youtube channel: CS Dojo for understanding of the quicksort algorithm.
https://www.youtube.com/watch?v=0SkOjNaO1XY

I also found a useful article/post regarding the implimentation which I think helped me with the js implimentation.
https://www.simplilearn.com/tutorials/data-structure-tutorial/quick-sort-algorithm
