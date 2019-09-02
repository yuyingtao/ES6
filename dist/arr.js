"use strict";

// ES6中的函数和数组补漏
// ** 对象的函数解构 ** 就是后台返回给我们的json对象赋值
var obj = {
  a: 1,
  b: 2,
  c: 122
};
var v = void 0,
    b = void 0,
    c = void 0;
function add(_ref) {
  var a = _ref.a,
      b = _ref.b,
      c = _ref.c;

  v = a;
  console.log(a);
  console.log(b);
  console.log(c);
}
add(obj);
console.log(v);
// 数组的函数解构
var arr = ["11", "111", "2222"];
function add1(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}
add1.apply(undefined, arr);

// in 的用法
// in可以来判断对象或者数组中是否存在某个值的
var obj1 = {
  a: 122,
  b: "jishupang"
};
console.log("a" in obj1);
// in可以来判断数组中某个数组下标是否存在
var aa1 = [,,,,,,,];
console.log(aa1.length);
console.log(0 in aa1);
console.log(1 in aa1);