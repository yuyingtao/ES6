/*
 * @Author: yuyingtao 
 * @Date: 2019-10-08 17:44:26 
 * @Last Modified by: yuyingtao
 * @Last Modified time: 2019-10-09 14:09:58
 */
// Set数据结构 
// set 声明
let setA=new Set(["jj","mm"]);
// Set和Array 的区别是Set不允许内部有重复的值，如果有只显示一个，相当于去重。虽然Set很像数组，但是他不是数组。
console.log(setA);
console.log(typeof setA)
// Set值的增删查
// add 增加
setA.add("hh")
