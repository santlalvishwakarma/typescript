var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Z = (function () {
    function Z() {
    }
    return Z;
})();
var A = (function (_super) {
    __extends(A, _super);
    function A() {
        _super.apply(this, arguments);
        this.x = 1;
    }
    return A;
})(Z);
var B = (function (_super) {
    __extends(B, _super);
    function B() {
        _super.apply(this, arguments);
    }
    return B;
})(A);
var C = (function (_super) {
    __extends(C, _super);
    function C() {
        _super.apply(this, arguments);
    }
    C.prototype.foo = function () {
    };
    return C;
})(A);

function foo(name) {
    return null;
}
