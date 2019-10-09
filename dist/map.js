"use strict";

/*
 * @Author: yuyingtao 
 * @Date: 2019-10-09 14:33:14 
 * @Last Modified by: yuyingtao
 * @Last Modified time: 2019-10-09 15:01:05
 */
// map 数据结构
// json
var a = {
  b: "x",
  c: "a"
  // =>map
};var m = new Map();
// 键名可以是任何值
m.set(a, "a");
console.log(m);
m.set("b", a);
console.log(m);
// 取值 get
m.get("b");
console.log(m.get("b"));
// 删除 delete size获取数量 has判断是否有这个属性 clear