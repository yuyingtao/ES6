'use strict';

//es6 数字操作
//二进制和八进制
var bi = 3;
console.log(bi);
var bi1 = 9;
console.log(bi1);
//可以使用Number.isFinite( )来进行数字验证，只要是数字，
//不论是浮点型还是整形都会返回true，其他时候会返回false。
var a = 11 / 4;
console.log(Number.isFinite(a)); //true
console.log(Number.isFinite('jspang')); //false
console.log(Number.isFinite(NaN)); //false
console.log(Number.isFinite(undefined)); //false
//判断是否为整数Number.isInteger(xx)
var b = 11;
console.log(Number.isInteger(b));

// 整数转换Number.parseInt(xxx)和浮点型转换Number.parseFloat(xxx)

var a1 = '9.18';
var b1 = '9.23';
console.log(Number.parseInt(a1));
console.log(Number.parseFloat(b1));

// 最大安全整数

console.log(Number.MAX_SAFE_INTEGER);
// ** 最小安全整数 **

console.log(Number.MIN_SAFE_INTEGER);
// 安全整数判断isSafeInteger( )
var ac = Math.pow(2, 53) - 1;
console.log(Number.isSafeInteger(ac)); //false