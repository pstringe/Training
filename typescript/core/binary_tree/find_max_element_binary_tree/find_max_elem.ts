interface BinaryTreeNode {
    root: number;
    left: BinaryTreeNode | null;
    right: BinaryTreeNode | null;
}

class BinaryTreeNode implements BinaryTreeNode {
    root: number;
    left: BinaryTreeNode | null;
    right: BinaryTreeNode | null;

    constructor (root, left=null, right=null) {
        this.root = root as number;
        this.left = left as BinaryTreeNode | null;
        this.right = right as BinaryTreeNode | null;
    }
}

const findMax = (root) => {
    if (!root){
        return -Infinity;
    }
    return Math.max(root.root, 
        Math.max(
            findMax(root.left), 
            findMax(root.right)
        )
    );
}

const root = new BinaryTreeNode(
    1,
    new BinaryTreeNode(-3),
    new BinaryTreeNode(5)
)

console.log(findMax(root), 5);

