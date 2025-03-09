interface LinkedListNode {
    value : number;
    next: LinkedListNode | null;
}

class LinkedListNode implements LinkedListNode {
    value : number;
    next : LinkedListNode | null;

    constructor (value: number, next: LinkedListNode | null = null) {
        this.value = value;
        this.next = next;
    }
}

const insert = (head, value) => {
    if (!head) {
        return new LinkedListNode(value);
    }
    if (head.value > value){
        let node = new LinkedListNode(value, head);
        head = node;
        return node;
    }

    let cur = head;
    while (cur.next) {
        if (cur.next.value > value) {
            let node = new LinkedListNode(value, cur.next);
            cur.next = node;
            return head;
        }
        cur = cur.next;
    }
    cur.next = new LinkedListNode(value);
    return head;
}

const printList = (head) => {
    let cur = head;
    while (cur){
        console.log(cur.value, '\n');
        cur = cur.next;
    }
    console.log('\n');
}

const h0 = new LinkedListNode(10, new LinkedListNode(30, new LinkedListNode(40)));
const h1 = null;

printList(insert(h1, 1));  // 1
printList(insert(h1, -1)); // -1 , 1
printList(insert(h0, 25)); // 10, 25, 30, 40
