/**
 * @param {string} str
 * @param {number} k
 * @return {number}
 * */
function maxVowels(str, k) {
  // substring -> contiguous in memory
  // could use a sliding window to define the substring

  // k defines a sliding window size
  // define a set for the vowels to check in O(1) time
  const vowels = new Set("a", "e", "i", "o", "u");
  const length = str.length;

  let maxCount = 0;
  let currentCount = 0;
  let L = 0,
    R = 0;
  while (L < length && R < length) {
    //           L   R
    //[l e e t c o d e ]
    //curCount = 2
    //max = 2

    if (vowels.has(str[R])) {
      currentCount++;
    }

    // 1 - 0 + 1 = 3, k = 3
    if (R - L + 1 >= k) {
      maxCount = Math.max(maxCount, currentCount);
      if (vowels.has(str[L])) {
        currentCount--;
      }
      L++;
    }
    R++;
  }

  return maxCount;
}
