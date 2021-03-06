"use strict";

/*
 * @Author: yuyingtao 
 * @Date: 2019-10-09 15:24:44 
 * @Last Modified by: yuyingtao
 * @Last Modified time: 2019-10-09 16:02:54
 */
// proxy 预处理，在执行函数的时候，可以提前处理
var ohj = {
  a: "a",
  add: function add(val) {
    return val + 10;
  }
  // proxy 声明
};var pbj = new Proxy({
  a: "a",
  add: function add(val) {
    return val + 10;
  }
}, {
  // 代理区域
  // target：得到的目标值
  // key：目标的key值，相当于对象的属性
  // property：这个不太常用，用法还在研究中，还请大神指教。
  get: function get(target, key, property) {
    console.log(target[key]);
  }
});
pbj.add;