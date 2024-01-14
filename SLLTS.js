var node = /** @class */ (function () {
    function node(num) {
        this.val = num;
    }
    return node;
}());
var SLL = /** @class */ (function () {
    function SLL() {
        this.countNodes = 0;
    }
    SLL.prototype.InsertFirst = function (num) {
        var tempPtr;
        if (this.headPtr == null) {
            this.headPtr = new node(num);
            this.countNodes++;
        }
        else {
            tempPtr = new node(num);
            tempPtr.next = this.headPtr;
            this.headPtr = tempPtr;
            this.countNodes++;
        }
    };
    SLL.prototype.DisplayList = function () {
        var trvPtr = this.headPtr;
        while (trvPtr != null) {
            console.log(trvPtr.val + "->");
            trvPtr = trvPtr.next;
        }
    };
    SLL.prototype.RtnCount = function () {
        return this.countNodes;
    };
    SLL.prototype.DeleteLast = function () {
        if (this.headPtr.next == null) {
            this.headPtr = this.headPtr.next;
        }
        var trvEnd = this.headPtr;
        while (trvEnd.next.next != null) {
            trvEnd = trvEnd.next;
        }
        trvEnd.next = trvEnd.next.next;
    };
    return SLL;
}());
var tsobj = new SLL();
tsobj.InsertFirst(50);
tsobj.InsertFirst(40);
tsobj.InsertFirst(30);
tsobj.InsertFirst(20);
tsobj.InsertFirst(10);
tsobj.DisplayList();
tsobj.DeleteLast();
tsobj.DisplayList();
