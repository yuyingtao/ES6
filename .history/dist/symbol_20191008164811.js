"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 * @Author: yuyingtao 
 * @Date: 2019-10-08 16:35:25 
 * @Last Modified by: yuyingtao
 * @Last Modified time: 2019-10-08 16:48:05
 */
// 声明symbol
var a = new String();
var b = new Number();
var c = new Boolean();
var d = new Array();
var e = new Object();
var f = Symbol("www");
console.log(typeof f === "undefined" ? "undefined" : _typeof(f));
console.log(f);