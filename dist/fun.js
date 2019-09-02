"use strict";

// 以前常规函数定义
function add(a, b) {
  console.log(a + b);
}
// 还有默认参数,这种情况下，只传入一个参数，也不会报错but如果采用严格模式就会报错
function add1(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  // 'use strict'
  console.log(a + b);
}
// 可以知道这个函数必要的参数是多少
console.log(add1.length);

//    箭头函数
// 箭头函数中不可加new，也就是说箭头函数不能当构造函数进行使用。
var add2 = function add2(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  console.log(a + b);
};
add2(2);