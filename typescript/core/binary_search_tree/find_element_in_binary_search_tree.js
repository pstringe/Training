var _a, _b;
var BinarySearchTreeNode = /** @class */ (function () {
    function BinarySearchTreeNode(root, left, right) {
        if (left === void 0) { left = null; }
        if (right === void 0) { right = null; }
        this.root = root;
        this.left = left;
        this.right = right;
    }
    return BinarySearchTreeNode;
}());
var find_element_in_binary_search_tree = function (root, target) {
    if ((root === null || root === void 0 ? void 0 : root.root) === target) {
        return root;
    }
    else if (target > (root === null || root === void 0 ? void 0 : root.root)) {
        return find_element_in_binary_search_tree(root.right, target);
    }
    else if (target < (root === null || root === void 0 ? void 0 : root.root)) {
        return find_element_in_binary_search_tree(root.left, target);
    }
    return null;
};
var tree = new BinarySearchTreeNode(1, new BinarySearchTreeNode(-4, new BinarySearchTreeNode(-5), new BinarySearchTreeNode(-3)), new BinarySearchTreeNode(4, new BinarySearchTreeNode(3), new BinarySearchTreeNode(5)));
console.log(find_element_in_binary_search_tree(tree, -2), null);
console.log((_a = find_element_in_binary_search_tree(tree, -4)) === null || _a === void 0 ? void 0 : _a.root, -4);
console.log((_b = find_element_in_binary_search_tree(tree, 5)) === null || _b === void 0 ? void 0 : _b.root, 5);
