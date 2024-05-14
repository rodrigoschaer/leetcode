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


function inorderTraversal(root: TreeNode | null): number[] {
	let ans: number[] = [];

	function inorder(root: TreeNode | null): void {
		if (!root) return;
		inorder(root.left);
		ans.push(root.val);
		inorder(root.right);
	}
	inorder(root);
	return ans;
};
