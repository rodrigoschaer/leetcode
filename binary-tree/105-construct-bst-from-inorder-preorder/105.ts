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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
	if (!preorder.length || !inorder.length) return null;

	// The preorder transversal operates in the root in the first place
	const root = new TreeNode(preorder[0]);

	// We can find out where is this root in the inorder, so we will know what is left and what is right of the root
	const rootIndex = inorder.indexOf(root.val);

	// We will now recursively proccess the leftmost part, that is everything left from the inorder
	// Pre: lets "remove" the processed root from the preorder: preorder.slice(1, rootIndex + 1), remember we picked the 0 index
	// In: everything that is left from the root in the inorder transversal: inorder.slice(0, rootIndex)
	root.left = buildTree(preorder.slice(1, rootIndex + 1), inorder.slice(0, rootIndex));

	// We will do the same for the rightmost part
	// Pre: ignore the root, take till the end of the preorder: preorder.slice(rootIndex + 1, preorder.length)
	// In: take the rest of the array: inorder.slice(rootIndex + 1, inorder.length)
	root.right = buildTree(preorder.slice(rootIndex + 1, preorder.length), inorder.slice(rootIndex + 1, inorder.length));

	return root
};
