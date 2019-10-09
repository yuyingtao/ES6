"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 * @Author: yuyingtao 
 * @Date: 2019-10-08 17:44:26 
 * @Last Modified by: yuyingtao
 * @Last Modified time: 2019-10-09 14:23:43
 */
// Set数据结构 
// set 声明
var setA = new Set(["jj", "mm", "nn", "yyt"]);
// Set和Array 的区别是Set不允许内部有重复的值，如果有只显示一个，相当于去重。虽然Set很像数组，但是他不是数组。
console.log(setA);
console.log(typeof setA === "undefined" ? "undefined" : _typeof(setA));
// Set值的增删查
// add 增加
setA.add("hh");
console.log(setA);
// delete 删除 语义化的方法
setA.delete("jj");
// 查找 has
setA.has("mm");
console.log(setA.has("mm"));
// set for..of循环
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = setA[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var item = _step.value;

    console.log(item);
  }
  // size 属性 size属性可以获得Set值的数量。
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

console.log(setA.size);