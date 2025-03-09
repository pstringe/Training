var _a;
var LinkedListNode = /** @class */ (function () {
    function LinkedListNode(value, next) {
        if (next === void 0) { next = null; }
        this.next = next;
        this.value = value;
    }
    return LinkedListNode;
}());
var mid = function (start, end) {
    var _a, _b;
    var slow = start;
    var fast = (_a = start === null || start === void 0 ? void 0 : start.next) === null || _a === void 0 ? void 0 : _a.next;
    while (fast && slow != end) {
        slow = slow.next;
        fast = (_b = fast === null || fast === void 0 ? void 0 : fast.next) === null || _b === void 0 ? void 0 : _b.next;
    }
    return slow;
};
var find_elem = function (head, target) {
    if (!head) {
        return null;
    }
    var s = head;
    var e = null;
    while (s != e) {
        var m = mid(s, e);
        if (m.value == target) {
            return m;
        }
        else if (m.value > target) {
            s = m.next;
        }
        else if (m.value < target) {
            e = m;
        }
    }
    return null;
};
var h0 = null;
var h1 = new LinkedListNode(1, new LinkedListNode(2, new LinkedListNode(3)));
console.log(find_elem(h0, 1), null);
console.log(find_elem(h1, 0), null);
console.log((_a = find_elem(h1, 2)) === null || _a === void 0 ? void 0 : _a.value, 2);
