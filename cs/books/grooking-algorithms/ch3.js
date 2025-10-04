/**
 * This is a simple factorial function.
 */
function fact(x) {
  if (x === 1) return 1;
  return x * fact(x - 1);
}

console.log(fact(3));

/**
 * =========================================================================
 * Exercises
 * =========================================================================
 *
 * 3.1 Suppose I show you a call stack like this.
 *                  |--------------|
 *                  |    greet2    |
 *                  | ------------ |
 *                  | name: maggie |
 *                  |--------------|
 *                  |    greet     |
 *                  | ------------ |
 *                  | name: maggie |
 *                  |--------------|
 * What information can you give me, just based on this call stack?
 *
 * Answer:
 * The call stack shows that the function 'greet' was called with the
 * argument "maggie". While executing, 'greet' called another function
 * 'greet2', also with the argument "maggie". At that point, greet is
 * paused, and 'greet2' is on top of the stack. Each function call has its
 * own stack frame, so both frames contain a separate name variable bound
 * to "maggie". When 'greet2' finishes, its frame will be popped off the
 * stack and execution will resume in 'greet'.
 *
 * -------------------------------------------------------------------------
 *
 * 3.2 Suppose you accidentally write a recursive function that runs
 * forever. As you saw, your computer allocates memory on the
 * stack for each function call. What happens to the stack when your
 * recursive function runs forever?
 *
 * Answer:
 * If a recursive function never terminates, each recursive call adds a new
 * stack frame to the call stack. Since the stack has limited memory, these
 * frames keep piling up until the stack memory is exhausted. At that point
 * the program crashes with a stack overflow error.
 *
 * -------------------------------------------------------------------------
 * =========================================================================
 */

/**
 * =========================================================================
 * Recap
 * =========================================================================
 *
 * - Recursion is when a function calls itself.
 * - Every recursive function has two cases: the base case
 *   and the recursive case.
 * - A stack has two operations: push and pop
 * - All function calls go onto the call stack.
 * - The call stack can get very large, which takes up a lot of memory.
 *
 * -------------------------------------------------------------------------
 */
