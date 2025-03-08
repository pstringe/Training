/*
**
*/
var LinkedListNode = /** @class */ (function () {
    function LinkedListNode(value, next) {
        if (next === void 0) { next = null; }
        this.value = value;
        this.next = next;
    }
    LinkedListNode.prototype.sum = function () {
        var _a, _b;
        /*
        if (this.value == ){ //make sure to use strict compare for 0 case
            return 0;
        }
        This function won't trigger in the zero case and can only be called if the head exists.
        Are there any problems that make use of null lists where this could present an issue?
        */
        return 1 + ((_b = (_a = this.next) === null || _a === void 0 ? void 0 : _a.sum()) !== null && _b !== void 0 ? _b : 0);
    };
    return LinkedListNode;
}());
var head = new LinkedListNode(1, new LinkedListNode(2, new LinkedListNode(3)));
var head0 = new LinkedListNode(0);
console.log(head.sum(), 3);
console.log(head0.sum(), 1); //this method will not work for the null head
