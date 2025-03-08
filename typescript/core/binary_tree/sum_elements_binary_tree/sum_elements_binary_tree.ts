interface BinaryTreeNode {
    root: number;
    left: BinaryTreeNode | null;
    right: BinaryTreeNode | null;
}

class BinaryTreeNode implements BinaryTreeNode {
    root: number;
    left: BinaryTreeNode | null;

    constructor(
        root: number,
        left: BinaryTreeNode | null = null,
        right: BinaryTreeNode | null = null,
    ) {
        this.root = root;
        this.left = left;
        this.right = right;
    }
}

const sum = (root) => {
    if (!root){
        return 0;
    }
    return root.root + sum(root.left) + sum(root.right);
}

const root = null;
const root1 = new BinaryTreeNode(1,
new BinaryTreeNode(2),
new BinaryTreeNode(3),
);

console.log(sum(root), 0);
console.log(sum(root1), 6);
