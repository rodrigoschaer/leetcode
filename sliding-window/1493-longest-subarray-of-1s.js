/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  // create a sliding window for a greedy approach
  // starting with two pointers
  // we want to return the biggest window size after deleting a 0
  let maxWindow = 0;
  let L = 0,
    R = 0;
  let countZero = 0;
  while (R < nums.length) {
    if (nums[R] === 0) {
      countZero++;
    }

    if (countZero > 1) {
      if (nums[L] === 0) {
        countZero--;
      }
      L++;
    }

    if (countZero <= 1) {
      maxWindow = Math.max(maxWindow, R - L);
    }

    R++;
  }

  return maxWindow;
};
