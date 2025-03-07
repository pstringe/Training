interface BinarySearchTreeNode {
    root : number;
    left : BinarySearchTreeNode | null;
    right: BinarySearchTreeNode | null;
}

class BinarySearchTreeNode implements BinarySearchTreeNode {
    root : number;
    left : BinarySearchTreeNode | null;
    right : BinarySearchTreeNode | null;

    constructor(root: number, 
        left: BinarySearchTreeNode | null = null,
        right: BinarySearchTreeNode | null = null
    ) {
        this.root = root;
        this.left = left;
        this.right = right;
    }
}

const find_element_in_binary_search_tree = (
    root: BinarySearchTreeNode | null,
    target: number) => {
    if (root?.root === target) {
        return root;
    } else if (target > root?.root) {
        return find_element_in_binary_search_tree(root.right, target);
    } else if (target < root?.root) {
        return find_element_in_binary_search_tree(root.left, target);
    }
    return null;
}

const tree = new BinarySearchTreeNode(
    1,
    new BinarySearchTreeNode(-4,
        new BinarySearchTreeNode(-5),
        new BinarySearchTreeNode(-3)
    ),
    new BinarySearchTreeNode(4,
        new BinarySearchTreeNode(3),
        new BinarySearchTreeNode(5)
    )
);

console.log(find_element_in_binary_search_tree(tree, -2), null);
console.log(find_element_in_binary_search_tree(tree, -4)?.root, -4);
console.log(find_element_in_binary_search_tree(tree, 5)?.root, 5);
