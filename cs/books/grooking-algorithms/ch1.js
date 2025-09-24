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
 * =========================================================================
 * Exercises
 * =========================================================================
 *
 * 1.1 Suppose you have a sorted list of 128 names, and you’re searching
 * through it using binary search. What’s the maximum number of
 * steps it would take?
 *
 * Answer:
 * We should take log2(128), so it's 7
 *
 * ------------------------------------------------------------------------
 * 1.2 Suppose you double the size of the list. What’s the maximum
 * number of steps now?
 *
 * Answer:
 * Double of 128 is 256, so log2(256) is 8
 *
 * ------------------------------------------------------------------------
 * 1.3 You have a name, and you want to find the person’s phone number
 * in the phone book. Give the run time of this scenario in terms of Big O.
 *
 * Answer:
 * O(log n)
 *
 * ------------------------------------------------------------------------
 * 1.4 You have a phone number, and you want to find the person’s name
 * in the phone book. (Hint: You’ll have to search through the whole
 * book!). Give the run time of this scenario in terms of Big O.
 *
 * Answer:
 * O(n)
 *
 * ------------------------------------------------------------------------
 * 1.5 You want to read the numbers of every person in the phone book.
 * Give the run time of this scenario in terms of Big O.
 *
 * Answer:
 * O(n)
 *
 * ------------------------------------------------------------------------
 * 1.6 You want to read the numbers of just the As. (his is a tricky one!
 * It involves concepts that are covered more in chapter 4. Read the
 * answer—you may be surprised!).
 * Give the run time of this scenario in terms of Big O.
 *
 * Answer:
 * O(n)
 *
 * =========================================================================
 */

/**
 * =========================================================================
 * Notes
 * =========================================================================
 * 1. Binary search is a lot faster than simple search.
 * 2. O(log n) is faster than O(n), but it gets a lot faster once the list of
 * items you’re searching through grows.
 * 3. Algorithm speed isn’t measured in seconds.
 * 4. Algorithm times are measured in terms of growth of an algorithm.
 * 5. Algorithm times are written in Big O notation.
 */
