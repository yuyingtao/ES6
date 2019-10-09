/*
 * @Author: yuyingtao 
 * @Date: 2019-10-09 15:24:44 
 * @Last Modified by: yuyingtao
 * @Last Modified time: 2019-10-09 15:48:26
 */
// proxy 预处理，在执行函数的时候，可以提前处理
let ohj={
  a:"a",
  add:function(val){
    return val+10;
  }
}