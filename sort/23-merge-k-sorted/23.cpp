#include <vector>
using namespace std;

struct ListNode {
  int val;
  ListNode *next;
  ListNode() : val(0), next(nullptr) {}
  ListNode(int x) : val(x), next(nullptr) {}
  ListNode(int x, ListNode *next) : val(x), next(next) {}
};

class Solution {
public:
  ListNode *mergeKLists(vector<ListNode *> &lists) {
    if (lists.size() == 0)
      return NULL;

    int n = lists.size();
    while (lists.size() > 1) {
      for (int i = 0; i < n / 2; i++)
        lists[i] = mergeSorted(lists[i], lists[n - 1 - i]);
      n = (n + 1) / 2;
    }

    return lists.front();
  }

  ListNode *mergeSorted(ListNode *list1, ListNode *list2) {
    if (list1 == NULL)
      return list2;
    if (list2 == NULL)
      return list1;

    if (list1->val <= list2->val) {
      list1->next = mergeSorted(list1->next, list2);
      return list1;
    } else {
      list2->next = mergeSorted(list1, list2->next);
      return list2;
    }
  }
};
