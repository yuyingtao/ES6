// 1 作用范围：
// let 所声明的变量只能在块级作用域中有效
// var 所声明的变量至少要在一个函数作用域内才有效
// const：它在英文中也是常量的意思，在ES6也是用来声明常量的，常量你可以简单理解为不变的量。
var a_1="jsp";
{
    //只在这个块级作用域里面有效
    let a_1="技术胖";
    var b_1="技术胖";
}
//技术胖
console.log("b_1")
//jsp
 console.log(a_1);

// var a=[];
// var b=[]
// for( var i =0;i<10;i++){
//     a[i]=function () {
//         console.log(i);
//     }

//     b[i]=(function () {

//         console.log(i)
//     })(i)
// }
// a[2]();
// b[2];