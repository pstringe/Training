interface BinarySearchTree {
    root:number;
    left: BinarySearchTree | null;
    right: BinarySearchTree | null;
}

class BinarySearchTree {
    root: number;
    right : BinarySearchTree | null;
    left : BinarySearchTree | null;
    
    constructor (root: number) {
        this.root = root;
        this.left = null;
        this.right = null;
    }

    findBFS(target) {
        const q : BinarySearchTree[] = [this];
        while(q.length){
            let n = q.shift();
            console.log({n});
            if (n?.root === target) {
                return n;
            }
            if (n.left != null){
                q.push(n.left);
            }
            if (n.right != null) {
                q.push(n.right);
            }
        }
        return null;
    }

    add(elem: number, parent: BinarySearchTree | null = null) {
        if (this.root == elem){
            return ;
        } else if (elem < this.root) {
            if(this.left != null){
                this.left.add(elem);
            } else {
                this.left = new BinarySearchTree(elem);
            }
        } else if (elem > this.root) {
            if (this.right != null) {
                this.right.add(elem);
            } else {
                this.right = new BinarySearchTree(elem);
            }
        }
    }
    //this function is wrong
    //we only traverse if not null 
}

const tree = new BinarySearchTree(1);
tree.add(-3);
tree.add(-2);
tree.add(-0);
tree.add(2);
tree.add(3);

console.log(tree);

console.log(tree.findBFS(5), null);
console.log(tree.findBFS(2)?.root, 2);
console.log(tree.findBFS(-3)?.root, -3);




