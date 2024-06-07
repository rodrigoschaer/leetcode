package binary_tree

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func deleteNode(root *TreeNode, key int) *TreeNode {
	// to remove a node we must find it first and then
	// decide what to put in place: left or right

	return dfs(root, key)
}

func dfs(node *TreeNode, key int) *TreeNode {
	if node == nil {
		return node
	}

	if key > node.Val {
		node.Right = dfs(node.Right, key)
	} else if key < node.Val {
		node.Left = dfs(node.Left, key)
	} else { // node.Val == key
		// we found our value
		// we need to put the small (left) value on its place
		// and tie the current right value as the left
		if node.Left == nil && node.Right == nil {
			return nil
		} else if node.Right == nil {
			return node.Left
		} else if node.Left == nil {
			return node.Right
		} else {
			// the found node has two children
			node.Val = min(node.Right)
			node.Right = dfs(node.Right, node.Val)
		}
	}
	return node
}

func min(node *TreeNode) int {
	minVal := node.Val

	for node != nil {
		if node.Val < minVal {
			minVal = node.Val
		}
		node = node.Left
	}

	return minVal
}
