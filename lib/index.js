"use strict";

(function () {
    console.log(1);
});

var arr = [1, 2, 3, 4];
var arr1 = [].concat(arr, [5, 7]);
var a = 1;
(function (a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;

    var c = void 0;
    c = a + b;
});

(function (c) {
    return c + 5;
});

var p = new Promise(function (resolve, reject) {
    var a = 12,
        b = 14;
    var time = setTimeout(function () {
        b--;
    }, 1000);
    if (b < 2) clearTimeout(time);
    if (a + b < 15) {
        resolve(a + b);
    }
});

p.then(function (data) {
    console.log(data);
}).catch(function (err) {
    console.log(err);
});