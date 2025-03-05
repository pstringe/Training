var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        if (next === void 0) { next = null; }
        this.val = val;
        this.next = next;
    }
    return ListNode;
}());
/*
** Solution: 1:34
** Write Test:
*/
function count_elements_in_a_linked_list(head) {
    var cnt = 0;
    var cur = head;
    while (cur) {
        cnt++;
        cur = cur.next;
    }
    return cnt;
}
var l1 = new ListNode(0, new ListNode(1, new ListNode(2)));
var l2 = null;
console.log(count_elements_in_a_linked_list(l1), 3);
console.log(count_elements_in_a_linked_list(l2), 0);
