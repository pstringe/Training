interface IListNode {
    val : number
    next : IListNode | null;
}

class ListNode implements IListNode {
    val : number;
    next : ListNode | null;

    constructor(val: number, next: ListNode | null= null){
        this.val = val;
        this.next = next;
    }
}

/*
** Solution: 1:34
** Write Tests: 2:17   PASS
*/

function count_elements_in_a_linked_list(head: ListNode | null): number {
    let cnt = 0;
    let cur = head;
    while (cur){
        cnt++;
        cur = cur.next
    }
    return cnt;
}

const l1 = new ListNode(0, new ListNode(1, new ListNode(2)))
const l2 = null;

console.log(count_elements_in_a_linked_list(l1), 3);
console.log(count_elements_in_a_linked_list(l2), 0);