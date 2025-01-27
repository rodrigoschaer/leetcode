/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number[]}
 */
var lexicographicallySmallestArray = function (nums, limit) {
  let result = Array(nums.length);

  const sorted = nums.map((el, i) => [el, i]).sort((a, b) => a[0] - b[0]);

  let lastElement = sorted[0][0];
  const groups = [[sorted[0][1]]];

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i][0] - lastElement > limit) {
      groups.push([]);
    }
    groups[groups.length - 1].push(sorted[i][1]);
    lastElement = sorted[i][0];
  }

  let i = 0;
  for (const group of groups) {
    group.sort((a, b) => a - b);
    for (const idx of group) {
      result[idx] = sorted[i][0];
      i++;
    }
  }

  return result;
};
