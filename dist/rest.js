'use strict';

// rest参数和arguments对象的区别

// rest参数只包含那些没有对应形参的实参；而 arguments 对象包含了传给函数的所有实参。

// arguments 对象不是一个真实的数组；而rest参数是真实的 Array 实例，也就是说你能够在它上面直接使用所有的数组方法。

// arguments 对象对象还有一些附加的属性 (比如callee属性)。

// 另外，使用rest参数时应注意一下两点：

// rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。
//扩展运算符和rest运算符
//扩展运算符 的作用 实现真正的赋值而不是内存堆栈的引用
//eg 
var arr = ['1', '3', '3'];
function aa(a) {
    a.push('aa');
}
aa(arr);
console.log(arr); //arr的值已经改变
var arr1 = ['1', '3', '3'];
function aa1() {
    for (var _len = arguments.length, a = Array(_len), _key = 0; _key < _len; _key++) {
        a[_key] = arguments[_key];
    }

    a.push('aa');
}
aa1(arr1);
console.log(arr1); //arr的值不会改变

// ****************************************
//rest运算符 (剩余)... rest参数搭配的变量是一个数组，
// 当编写一个方法时，我们允许它传入的参数是不确定的
function bb() {
    for (var _len2 = arguments.length, a = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        a[_key2] = arguments[_key2];
    }

    console.log(a);
}
bb({ b: "111" }); // [{b:"111"}]
bb(1, 2, 3); //[1,2,3]