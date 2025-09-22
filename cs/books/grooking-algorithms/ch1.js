/**
 * This is a simple binary search algorithm implementation in JavaScript.
 */

function binarySearch(arr, item) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.round((low + high) / 2);
    let guess = arr[mid];

    if (guess === item) {
      return mid;
    }
    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return null;
}

console.log(binarySearch([1, 10, 20, 25, 30, 45, 50, 70], 25));

/**
 * ================================================================
 * Exercises
 * ================================================================
 *
 * 1.1 Suppose you have a sorted list of 128 names, and you’re searching
 * through it using binary search. What’s the maximum number of
 * steps it would take?
 *
 * Answer:
 * We should take log2(128), so it's 7
 *
 * ----------------------------------------------------------------
 * 1.2 Suppose you double the size of the list. What’s the maximum
 * number of steps now?
 *
 * Answer:
 * Double of 128 is 256, so log2(256) is 8
 *
 * ----------------------------------------------------------------
 * ================================================================
 */
