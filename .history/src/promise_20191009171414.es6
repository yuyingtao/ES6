/*
 * @Author: yuyingtao 
 * @Date: 2019-10-09 16:15:29 
 * @Last Modified by: yuyingtao
 * @Last Modified time: 2019-10-09 17:09:21
 */
// Promise 是异步编程的一种解决方案，其实是一个构造函数，承诺将来会执行
//自己身上有all、reject、resolve这几个方法，原型上有then、catch等方法。
let state = 1;

function step1(resolve, reject) {
  console.log('1.开始-洗菜做饭');
  if (state == 1) {
    resolve('洗菜做饭--完成');
  } else {
    reject('洗菜做饭--出错');
  }
}


function step2(resolve, reject) {
  console.log('2.开始-坐下来吃饭');
  if (state == 1) {
    resolve('坐下来吃饭--完成');
  } else {
    reject('坐下来吃饭--出错');
  }
}


function step3(resolve, reject) {
  console.log('3.开始-收拾桌子洗完');
  if (state == 1) {
    resolve('收拾桌子洗完--完成');
  } else {
    reject('收拾桌子洗完--出错');
  }
}

new Promise(step1).then(function (val) {
  console.log(val);
  return new Promise(step2);
}).then(function (val) {
  console.log(val);
  return new Promise(step3);
}).then(function (val) {
  console.log(val);
  return val;
});
// 这里讲的比较简单，只能算入门
// Promise最大的好处是在异步执行的流程中，把执行代码和处理结果的代码清晰地分离了
// 廖雪峰讲的比较详细
// https://www.liaoxuefeng.com/wiki/1022910821149312/1023024413276544