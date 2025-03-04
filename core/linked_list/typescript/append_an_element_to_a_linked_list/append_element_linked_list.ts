interface LinkedListNode {
    data: number;
    next: LinkedListNode | null;
}

class LinkedListNode {
    public data: number;
    public next: LinkedListNode | null;

    constructor(data, next: LinkedListNode | null = null){
        this.data = data;
        this.next = next;
    }
}

const head: LinkedListNode = new LinkedListNode(1,
    new LinkedListNode(2, 
        new LinkedListNode(3, 
            new LinkedListNode(5)
        )
    )
);

/*
** start 00:00 end 4:02
*/

const append_linked_list_node = (head: LinkedListNode | null, node: LinkedListNode|null) => {
    if (!head || !node){
        return head;
    }
    let cur = head;
    while (cur.next){
        cur = cur.next;
    }
    cur.next = null;
    return head;
};

const logLinkedList = (head: LinkedListNode | null) => {
    let cur = head;
    while (cur){
        console.log({cur});
        cur = cur.next;
    }
}

logLinkedList(append_linked_list_node(head, new LinkedListNode(5)));

/*
** End 4:02
*/