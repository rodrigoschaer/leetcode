#include <vector>
using namespace std;

class Solution {
public:
  int findKthLargest(vector<int> &nums, int k) {
    k = nums.size() - k;

    return quickSelect(nums, 0, nums.size(), k);
  }

  int quickSelect(vector<int> &nums, int l, int r, int &k) {
    int pivot = nums[r];
    int swap_ptr = l;

    for (int i = l; i < r; i++) {
      if (nums[i] <= pivot) {
        int tmp = nums[swap_ptr];
        nums[swap_ptr] = nums[i];
        nums[i] = tmp;
        swap_ptr++;
      }
    }

    nums[r] = nums[swap_ptr];
    nums[swap_ptr] = pivot;

    if (swap_ptr > k) {
      return quickSelect(nums, l, swap_ptr - 1, k);
    } else if (swap_ptr < k) {
      return quickSelect(nums, swap_ptr + 1, r, k);
    } else {
      return nums[swap_ptr];
    }
  }
};
