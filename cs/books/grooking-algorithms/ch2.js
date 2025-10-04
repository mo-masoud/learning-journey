/**
 * This is a simple selection sort algorithm implementation in JavaScript.
 */
const findSmallest = (arr) => {
  let smallest = arr[0];
  let smallestIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
};

const selectionSort = (arr) => {
  const sortedArr = [];

  const len = arr.length;

  for (let i = 0; i < len; i++) {
    const smallest = findSmallest(arr);
    sortedArr.push(arr.splice(smallest, 1)[0]);
  }

  return sortedArr;
};

const arr = [10, 5, 15, 30, 20, 80, 1, 100, 60, 50];

console.log(selectionSort(arr));

/**
 * =========================================================================
 * Exercises
 * =========================================================================
 *
 * 2.1 Suppose you’re building an app to keep track of your finances.
 *
 * Every day, you write down everything you spent money on. At the
 * end of the month, you review your expenses and sum up how much
 * you spent. So, you have lots of inserts and a few reads. Should you
 * use an array or a list?
 *
 * Answer:
 * Linked list is better, because linked list insert in O(1).
 *
 * -------------------------------------------------------------------------
 *
 * 2.2 Suppose you’re building an app for restaurants to take customer
 * orders. Your app needs to store a list of orders. Servers keep adding
 * orders to this list, and chefs take orders of the list and make them.
 * It’s an order queue: servers add orders to the back of the queue, and
 * the chef takes the first order of the queue and cooks it.
 *
 * Would you use an array or a linked list to implement this queue?
 * (Hint: Linked lists are good for inserts/deletes, and arrays are good
 * for random access. Which one are you going to be doing here?)
 *
 * Answer:
 * Linked list is better, because it has O(1) in insert/delete and anyway
 * we are reading items in order, so we have to read items sequentially.
 *
 * -------------------------------------------------------------------------
 * 2.3 Let’s run a thought experiment. Suppose Facebook keeps a list of
 * usernames. When someone tries to log in to Facebook, a search is
 * done for their username. If their name is in the list of usernames,
 * they can log in. People log in to Facebook pretty often, so there are
 * a lot of searches through this list of usernames. Suppose Facebook
 * uses binary search to search the list. Binary search needs random
 * access—you need to be able to get to the middle of the list of
 * usernames instantly. Knowing this, would you implement the list
 * as an array or a linked list?
 *
 * Answer:
 * Array is much better in random-access reading, because reading in array
 * is O(1), not like linked list O(n), so I'll use array.
 * -------------------------------------------------------------------------
 *
 * 2.4 People sign up for Facebook pretty often, too. Suppose you decided
 * to use an array to store the list of users. What are the downsides
 * of an array for inserts? In particular, suppose you’re using binary
 * search to search for logins. What happens when you add new users
 * to an array?
 *
 * Answer:
 * Insert a new item in array take O(n), that is mean I need to rewrite
 * the array again, because I need more slots in memory to keep all items
 * in the array together, so if I add a new user to the array I need to
 * to rewrite the entire array again in memory to fit it's new size.
 *
 * -------------------------------------------------------------------------
 *
 * 2.5 In reality, Facebook uses neither an array nor a linked list to store
 * user information. Let’s consider a hybrid data structure: an array
 * of linked lists. You have an array with 26 slots. Each slot points to a
 * linked list. For example, the first slot in the array points to a linked
 * list containing all the usernames starting with a. The second slot
 * points to a linked list containing all the usernames starting with b,
 * and so on.
 *
 * Suppose Adit B signs up for Facebook, and you want to add them
 * to the list. You go to slot 1 in the array, go to the linked list for slot
 * 1, and add Adit B at the end. Now, suppose you want to search for
 * Zakhir H. You go to slot 26, which points to a linked list of all the
 * Z names. hen you search through that list to find Zakhir H.
 *
 * Compare this hybrid data structure to arrays and linked lists. Is it
 * slower or faster than each for searching and inserting? You don’t
 * have to give Big O run times, just whether the new data structure
 * would be faster or slower.
 *
 * Answer:
 * - Insertion:
 *  - Array → Slow (need shifting)
 *  - Linked List → easy.
 *  - Hybrid → easiest: pick the right slot quickly, then append.
 *  Result: Hybrid is faster than both.
 * - Searching:
 *  - Array → fastest (can scan or binary search).
 *  - Linked List → slowest (walk all nodes).
 *  - Hybrid → in-between: you only search a subset list, but still walk nodes.
 *  Result: Array > Hybrid > Linked List.
 *
 * -------------------------------------------------------------------------
 * =========================================================================
 */

/**
 * =========================================================================
 * Recap
 * =========================================================================
 *
 * - Your computer’s memory is like a giant set of drawers.
 * - When you want to store multiple elements, use an array or a list.
 * - With an array, all your elements are stored right next to each other.
 * - With a list, elements are strewn all over, and one element stores
 *   the address of the next one.
 * - Arrays allow fast reads.
 * - Linked lists allow fast inserts and deletes.
 * - All elements in the array should be the same type (all ints,
 *   all doubles, and so on).
 *
 * -------------------------------------------------------------------------
 */
