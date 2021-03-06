/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch15/15.2/15.2.3/15.2.3.8/15.2.3.8-2-4.js
 * @description Object.seal - non-enumerable own property of 'O' is sealed
 */


function testcase() {
        var obj = {};

        Object.defineProperty(obj, "foo", {
            value: 10,
            enumerable: false,
            configurable: true
        });
        var preCheck = Object.isExtensible(obj);
        Object.seal(obj);

        var beforeDeleted = obj.hasOwnProperty("foo");
        delete obj.foo;
        var afterDeleted = obj.hasOwnProperty("foo");

        return preCheck && beforeDeleted && afterDeleted;
    }
runTestCase(testcase);
