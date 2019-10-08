/*
 * @Author: yuyingtao 
 * @Date: 2019-10-08 16:35:25 
 * @Last Modified by: yuyingtao
 * @Last Modified time: 2019-10-08 17:24:36
 */
// 声明symbol
// Symbol是由ES6规范引入的一项新特性，基础数据类型,它的功能类似于一种标识唯一性的ID。
// 通常情况下，我们可以通过调用Symbol()函数来创建一个Symbol实例：
var a = new String;
var b = new Number;
var c = new Boolean;
var d = new Array;
var e = new Object; 
var f= Symbol("www");
// 得到的类型也是symbol
console.log(typeof(f));
// 英文意思为象征; 符号; 代号; 记号;所以具体的内容，并不是以往那种数据类型，最大的作用就是一个符号作用
console.log(f);

