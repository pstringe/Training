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
var sum = function (root) {
    if (!root) {
        return 0;
    }
    return root.root + sum(root.left) + sum(root.right);
};
var root = null;
var root1 = new BinaryTreeNode(1, new BinaryTreeNode(2), new BinaryTreeNode(3));
console.log(sum(root), 0);
console.log(sum(root1), 6);
