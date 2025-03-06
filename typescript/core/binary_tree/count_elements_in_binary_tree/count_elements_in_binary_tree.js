"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var binary_tree_node_class_1 = require("../binary_tree_node_class");
/*
** First solution 1:47
*/
var count_nodes = function (root) {
    if (!root) {
        return 0;
    }
    return 1 + count_nodes(root.left) + count_nodes(root.right);
};
/*
**
*/
var tree1 = null;
var tree2 = new binary_tree_node_class_1.BinaryTreeNode(1, new binary_tree_node_class_1.BinaryTreeNode(2, null), new binary_tree_node_class_1.BinaryTreeNode(3, null));
console.log(count_nodes(tree1), 0);
console.log(count_nodes(tree2), 3);
