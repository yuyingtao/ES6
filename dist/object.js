"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//对象赋值
var name = "yyt";
var skill = "pc";
var obj = {
    name: name,
    skill: skill
};
console.log(obj);
// 构建key值，有时候对象的属性名都不确定
var ke = "name";
var obj1 = _defineProperty({}, ke, "web");
console.log(obj1);
//合并对象
var a = {
    a: 'js'
};
var b = {
    b: 'css'
};
var c = {
    c: "web"
};
var d = Object.assign(a, b, c);
console.log(d);