"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * @Author: yuyingtao 
 * @Date: 2019-10-08 16:35:25 
 * @Last Modified by: yuyingtao
 * @Last Modified time: 2019-10-08 17:42:51
 */
// 声明symbol
// Symbol是由ES6规范引入的一项新特性，基础数据类型,它的功能类似于一种标识唯一性的ID。
// 通常情况下，我们可以通过调用Symbol()函数来创建一个Symbol实例：
var a = new String();
var b = new Number();
var c = new Boolean();
var d = new Array();
var e = new Object();
var f = Symbol("www");
// 得到的类型也是symbol
console.log(typeof f === "undefined" ? "undefined" : _typeof(f));
// 英文意思为象征; 符号; 代号; 记号;所以具体的内容，并不是以往那种数据类型，最大的作用就是一个符号作用
console.log(f);

// 主要有三个方面的作用


// 1 使用Symbol来作为对象属性名(key)
// 一般情况下，我们平时定义对象
var h = {
  a: "222"
  // 使用symbol
};var PROP_NAME = Symbol();
var h1 = _defineProperty({}, PROP_NAME, "222");
// 访问Symbol对象,不能通过.key来操作。for。。in 也不能访问到，json.Parse也会排除在外
h1[PROP_NAME];

// 使用Symbol来替代常量 
// 如果需要大量使用常亮来作为一些唯一标识判断的时候，可以减少取名字的工作。。。。。（就这点）

// 3 使用Symbol定义类的私有属性/方法，这个还比较重要，理解很重要
// 因为无法通过.key来获取，每次声明symbol的也不是具体的值，所以在外部模块，或者js无法直接调用这个属性值
// 从而实现了私有值了