class TreeNode {
  constructor(val, right, left) {
    this.val = val ?? null;
    this.right = right ?? null;
    this.left = left ?? null;
  }
}

const LEFT = "left";
const RIGHT = "right";

/**
 * @param {TreeNode} root
 * @return {number}
 */
function longestZigZag(root) {
  let longestPath = 0;

  dfs(root.right, 1, RIGHT);
  dfs(root.left, 1, LEFT);

  return longestPath;

  /**
   * @param {TreeNode} root
   * @param {number} currentPath
   * @param {string} currentDirection
   * @return {void}
   */
  function dfs(root, currentPath, currentDirection) {
    if (!root) return null;

    longestPath = Math.max(longestPath, currentPath);

    dfs(root.left, currentDirection === RIGHT ? currentPath + 1 : 1, LEFT);
    dfs(root.right, currentDirection === LEFT ? currentPath + 1 : 1, RIGHT);
  }
}
