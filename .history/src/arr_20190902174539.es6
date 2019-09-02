// ES6中的函数和数组补漏
// ** 对象的函数解构 ** 就是后台返回给我们的json对象赋值
let obj={
  a:1,
  b:2,
  c:122
}
let v,b,c
function add ({a,b,c}){
  v=a
 console.log(a)
 console.log(b)
 console.log(c)
}
add(obj)
console.log(v)
// 数组的函数解构
let arr=["11","111","2222"]
function add1(a,b,c){
  console.log(a)
  console.log(b)
  console.log(c)
}
add1(...arr)