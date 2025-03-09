interface LinkedListNode {
    value : number;
    next : LinkedListNode | null;
}

class LinkedListNode implements LinkedListNode {
    value: number;
    next : LinkedListNode | null;

    constructor(value: number, next: LinkedListNode | null=null){
        this.next = next;
        this.value = value;
    }
}

const mid = (start, end) => {
    let slow = start;
    let fast = start?.next?.next;
    while (fast && slow != end) {
        slow = slow.next;
        fast = fast?.next?.next;
    }
    return slow;
};

const find_elem = (head: LinkedListNode | null, target: number) => {
    if (!head) {
        return null;
    }

    let s = head;
    let e = null;
    while (s != e) {
        let m = mid(s, e);
        if (m.value == target){
            return m;
        } else if (m.value > target) {
            s = m.next;
        } else if (m.value < target) {
            e = m;
        }
    }
    return null;  
}

const h0 = null;
const h1 = new LinkedListNode(1, 
new LinkedListNode(2, 
new LinkedListNode(3)
)
)

console.log(find_elem(h0, 1), null);
console.log(find_elem(h1, 0), null);
console.log(find_elem(h1, 2)?.value, 2);
