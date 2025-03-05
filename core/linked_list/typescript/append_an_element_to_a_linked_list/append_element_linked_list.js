var LinkedListNode = /** @class */ (function () {
    function LinkedListNode(data, next) {
        if (next === void 0) { next = null; }
        this.data = data;
        this.next = next;
    }
    return LinkedListNode;
}());
var head = new LinkedListNode(1, new LinkedListNode(2, new LinkedListNode(3, new LinkedListNode(5))));
/*
** Iterative
** start 00:00 end 4:02

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
*/
// Recursive solution
var append_linked_list_node = function (head, node) {
    if (!head.next) {
        return head.next = node;
    }
    append_linked_list_node(head.next, node);
    return head;
};
var logLinkedList = function (head) {
    var cur = head;
    while (cur) {
        console.log({ cur: cur });
        cur = cur.next;
    }
};
logLinkedList(append_linked_list_node(head, new LinkedListNode(5)));
/*
** End 4:02
*/ 
