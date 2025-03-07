var _a, _b;
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree(root) {
        this.root = root;
        this.left = null;
        this.right = null;
    }
    BinarySearchTree.prototype.findBFS = function (target) {
        var q = [this];
        while (q.length) {
            var n = q.shift();
            console.log({ n: n });
            if ((n === null || n === void 0 ? void 0 : n.root) === target) {
                return n;
            }
            if (n.left != null) {
                q.push(n.left);
            }
            if (n.right != null) {
                q.push(n.right);
            }
        }
        return null;
    };
    BinarySearchTree.prototype.add = function (elem, parent) {
        if (parent === void 0) { parent = null; }
        if (this.root == elem) {
            return;
        }
        else if (elem < this.root) {
            if (this.left != null) {
                this.left.add(elem);
            }
            else {
                this.left = new BinarySearchTree(elem);
            }
        }
        else if (elem > this.root) {
            if (this.right != null) {
                this.right.add(elem);
            }
            else {
                this.right = new BinarySearchTree(elem);
            }
        }
    };
    return BinarySearchTree;
}());
var tree = new BinarySearchTree(1);
tree.add(-3);
tree.add(-2);
tree.add(-0);
tree.add(2);
tree.add(3);
console.log(tree);
console.log(tree.findBFS(5), null);
console.log((_a = tree.findBFS(2)) === null || _a === void 0 ? void 0 : _a.root, 2);
console.log((_b = tree.findBFS(-3)) === null || _b === void 0 ? void 0 : _b.root, -3);
