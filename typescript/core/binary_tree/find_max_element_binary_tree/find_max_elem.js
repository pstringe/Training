var BinaryTreeNode = /** @class */ (function () {
    function BinaryTreeNode(root, left, right) {
        if (left === void 0) { left = null; }
        if (right === void 0) { right = null; }
        this.root = root;
        this.left = left;
        this.right = right;
    }
    return BinaryTreeNode;
}());
var findMax = function (root) {
    if (!root) {
        return -Infinity;
    }
    return Math.max(root.root, Math.max(findMax(root.left), findMax(root.right)));
};
var root = new BinaryTreeNode(1, new BinaryTreeNode(-3), new BinaryTreeNode(5));
console.log(findMax(root), 5);
