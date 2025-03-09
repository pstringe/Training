var LinkedListNode = /** @class */ (function () {
    function LinkedListNode(value, next) {
        if (next === void 0) { next = null; }
        this.value = value;
        this.next = next;
    }
    return LinkedListNode;
}());
var insert = function (head, value) {
    if (!head) {
        return new LinkedListNode(value);
    }
    if (head.value > value) {
        var node = new LinkedListNode(value, head);
        head = node;
        return node;
    }
    var cur = head;
    while (cur.next) {
        if (cur.next.value > value) {
            var node = new LinkedListNode(value, cur.next);
            cur.next = node;
            return head;
        }
        cur = cur.next;
    }
    cur.next = new LinkedListNode(value);
    return head;
};
var printList = function (head) {
    var cur = head;
    while (cur) {
        console.log(cur.value, '\n');
        cur = cur.next;
    }
    console.log('\n');
};
var h0 = new LinkedListNode(10, new LinkedListNode(30, new LinkedListNode(40)));
var h1 = null;
printList(insert(h1, 1)); // 1
printList(insert(h1, -1)); // -1 , 1
printList(insert(h0, 25)); // 10, 25, 30, 40
