class TreeNode {
	val: number
	left: TreeNode | null
	right: TreeNode | null
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = (val === undefined ? 0 : val)
		this.left = (left === undefined ? null : left)
		this.right = (right === undefined ? null : right)
	}
}

function deleteNode(root: TreeNode | null, val: number): TreeNode | null {
	function minValueBST(node: TreeNode) {
		while (node.left) {
			node = node.left
		}
		return node
	}

	if (!root) return null;

	// apply binary search
	if (val > root.val) {
		root.right = deleteNode(root.right, val);
	} else if (val < root.val) {
		root.left = deleteNode(root.left, val);
	} else {
		// found the value
		if (!root.left && !root.right) {
			// 0 child case
			return null;
		} else if (!root.left) {
			// 1 child case for the right
			return root.right;
		} else if (!root.right) {
			// 1 child case for the left
			return root.left;
		} else {
			// 2 children case
			let minNode = minValueBST(root.right);
			minNode.left = root.left
			return root.right
		}
	}
	return root;
};
