/*
 * @Author: yuyingtao 
 * @Date: 2019-10-09 14:33:14 
 * @Last Modified by: yuyingtao
 * @Last Modified time: 2019-10-09 14:57:41
 */
// map 数据结构
// json
let a={
  b:"x",
  c:"a"
}
// =>map
let m=new Map()
// 键名可以是任何值
m.set(a,"a");
console.log(m)
m.set("b",a)
console.log(m)
// 取值 get
m.get("b")

