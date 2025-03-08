interface LinkedListNode {
    value: number;
    next: LinkedListNode | null;
}

/*
**
*/
class LinkedListNode implements LinkedListNode {
    value: number;
    next: LinkedListNode;

    constructor(value: number, next: LinkedListNode | null = null){ //consolidate conditional type
        this.value = value;
        this.next = next;
    }

    sum () {
        /*
        if (this.value == ){ //make sure to use strict compare for 0 case
            return 0;
        }
        This function won't trigger in the zero case and can only be called if the head exists.
        Are there any problems that make use of null lists where this could present an issue?
        */
        return 1 + (this.next?.sum() ?? 0);
    }
}

const head: LinkedListNode = new LinkedListNode(1, 
    new LinkedListNode(2,
        new LinkedListNode(3)
    )
);

const head0 = new LinkedListNode(0);

console.log(head.sum(), 3);
console.log(head0.sum(), 1); //this method will not work for the null head