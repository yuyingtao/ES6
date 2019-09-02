//    箭头函数
// 以前常规函数定义
function add(a,b){
  console.log(a+b)
}
// 还有默认参数,这种情况下，只传入一个参数，也不会报错but如果采用严格模式就会报错
function add1(a,b=1){
  'use strict'
  console.log(a+b)
}