var LinkedListNode = /** @class */ (function () {
    function LinkedListNode(value, next) {
        if (next === void 0) { next = null; }
        this.value = value;
        this.next = next;
    }
    return LinkedListNode;
}());
var removeTarget = function (head, target) {
    var cur;
    while (head.value == target) {
        head = head.next;
    }
    cur = head;
    while (cur) {
        var tmp = cur;
        while (tmp.next && tmp.next.value == target) {
            tmp = tmp.next;
        }
        cur.next = tmp.next;
        cur = cur.next;
    }
    return head;
};
var printList = function (head) {
    var cur = head;
    while (cur) {
        console.log(cur.value, '\n');
        cur = cur.next;
    }
};
var head = new LinkedListNode(1, new LinkedListNode(2, new LinkedListNode(2, new LinkedListNode(3))));
console.log(printList(removeTarget(head, 2)), '\n---\n');
console.log(printList(removeTarget(head, 3)), '\n---\n');
