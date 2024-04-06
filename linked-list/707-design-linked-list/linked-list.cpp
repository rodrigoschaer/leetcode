class MyLinkedList {
private:
  struct ListNode {
    int val;
    ListNode *next, *prev;
    ListNode(int val) : val(val), next(nullptr), prev(nullptr) {}
  };

public:
  // Sets dummy nodes to help process the list
  ListNode *left, *right;

  MyLinkedList() {
    left = right = new ListNode(-1);

    left->next = right;
    right->prev = left;
  }

  // Get the value of the INDEXth node. Return -1 if not found
  int get(int index) {
    ListNode *current = left->next;

    // Iterate through the list until index is exhausted
    // This makes it O(n)
    while (current != right && index) {
      current = current->next;
      index -= 1;
    }

    // Checks some conditions here:
    //  - The current pointer is not null
    //  - The current pointer is not the dummy pointer
    //  - Index was actually exhausted
    return current->val;
  }

  // Adds a list node to the head element
  void addAtHead(int val) {
    ListNode *node = new ListNode(val);

    ListNode *next = left->next;
    ListNode *prev = left;

    prev->next = node;
    next->prev = node;

    node->next = next;
    node->prev = prev;
  }

  // Adds a node to the tail
  void addAtTail(int val) {
    ListNode *node = new ListNode(val);

    ListNode *next = right;
    ListNode *prev = right->prev;

    prev->next = node;
    next->prev = node;

    node->next = next;
    node->prev = prev;
  }

  // Adds a node at INDEX
  void addAtIndex(int index, int val) {
    ListNode *current = left->next;

    while (current != right && index) {
      current = current->next;
      index -= 1;
    }
    if (index)
      return;

    ListNode *node = new ListNode(val);
    ListNode *next = current;
    ListNode *prev = current->prev;

    prev->next = node;
    next->prev = node;

    node->next = next;
    node->prev = prev;
  }

  void deleteAtIndex(int index) {
    ListNode *current = left->next;

    while (current != right && index) {
      current = current->next;
      index -= 1;
    }
    if (current == right)
      return;

    ListNode *next = current->next;
    ListNode *prev = current->prev;
    next->prev = prev;
    prev->next = next;
  }
};
