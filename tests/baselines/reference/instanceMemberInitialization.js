var C = (function () {
    function C() {
        this.x = 1;
    }
    return C;
})();

var c = new C();
c.x = 3;
var c2 = new C();
var r = c.x === c2.x;
