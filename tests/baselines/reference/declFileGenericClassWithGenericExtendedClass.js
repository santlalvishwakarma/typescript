//// [declFileGenericClassWithGenericExtendedClass.js]
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Base = (function () {
    function Base() {
    }
    return Base;
})();
var Derived = (function (_super) {
    __extends(Derived, _super);
    function Derived() {
        _super.apply(this, arguments);
    }
    return Derived;
})(Base);

var Baz = (function () {
    function Baz() {
    }
    return Baz;
})();


////[declFileGenericClassWithGenericExtendedClass.d.ts]
interface IFoo {
    baz: Baz;
}
declare class Base<T> {
}
declare class Derived<T> extends Base<T> {
}
interface IBar<T> {
    derived: Derived<T>;
}
declare class Baz implements IBar<Baz> {
    public derived: Derived<Baz>;
}
