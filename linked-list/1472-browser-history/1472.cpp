#include <string>
using namespace std;

class BrowserHistory {
private:
  struct Node {
    string val;
    Node *prev;
    Node *next;

    Node(string str) : val(str), prev(nullptr), next(nullptr) {}
  };

  Node *currentPage;

public:
  BrowserHistory(string homepage) { currentPage = new Node(homepage); }

  void visit(string url) {
    currentPage->next = new Node(url);
    currentPage->next->prev = currentPage;
    currentPage = currentPage->next;
  }

  string back(int steps) {
    while (currentPage->prev && steps > 0) {
      currentPage = currentPage->prev;
      steps--;
    }
    return currentPage->val;
  }

  string forward(int steps) {
    while (currentPage->next && steps > 0) {
      currentPage = currentPage->next;
      steps--;
    }
    return currentPage->val;
  }
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * BrowserHistory* obj = new BrowserHistory(homepage);
 * obj->visit(url);
 * string param_2 = obj->back(steps);
 * string param_3 = obj->forward(steps);
 */
