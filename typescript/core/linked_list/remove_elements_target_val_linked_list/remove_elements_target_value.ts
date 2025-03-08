interface LinkedListNode {
    value: number;
    next: LinkedListNode | null;
}

class LinkedListNode implements LinkedListNode {
    value: number;
    next: LinkedListNode | null;
    
    constructor (value: number, next: LinkedListNode | null=null) {
        this.value = value;
        this.next = next;
    }

}

const removeTarget = (head, target) => {
    let cur;

    while (head.value == target) {
        head = head.next;
    }
    cur = head;
    while (cur){
        let tmp = cur;
        while (tmp.next && tmp.next.value == target) {
            tmp = tmp.next;
        }
        cur.next = tmp.next
        cur = cur.next;
    }
    return head;
}

const printList = (head) => {
    let cur = head;
    while(cur) {
        console.log(cur.value, '\n');
        cur = cur.next;
    }
}

const head: LinkedListNode = new LinkedListNode(1, 
    new LinkedListNode(
        2, 
        new LinkedListNode(
            2,
            new LinkedListNode(3)
        )
    )
)

console.log(printList(removeTarget(head, 2)), '\n---\n');
console.log(printList(removeTarget(head, 3)), '\n---\n');

