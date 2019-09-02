// ES6中的函数和数组补漏
// ** 对象的函数解构 ** 就是后台返回给我们的json对象赋值
let obj={
  a:1,
  b:2,
  c:122
}
function add ({a,b,c}){
 console.log(a)
 console.log(b)
 console.log(c)
}
add(obj)