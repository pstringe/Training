import {BinaryTreeNode} from '../binary_tree_node_class';

/*
** First solution 1:47
*/
const count_nodes = (root: BinaryTreeNode) => {
    if (!root) {
        return 0;
    }
    return 1 + count_nodes(root.left) + count_nodes(root.right);
}

/*
** 4:55 debugging
*/

const tree1 = null;
const tree2 = new BinaryTreeNode(1, 
    new BinaryTreeNode(2, null),
    new BinaryTreeNode(3, null)
)

console.log(count_nodes(tree1), 0);
console.log(count_nodes(tree2), 3);
