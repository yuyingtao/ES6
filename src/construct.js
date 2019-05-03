//结构赋值
//数组结构赋值
let [a,b,c]=[0,1,2];
console.log(a);
let [d,e,f,[g,h]]=[1,2,3,[0,1]];//左右两边的结构必须一致
console.log(d)
//对象赋值 undfined null 可以设置默认值
//给j 一个默认值pengpeng了
let [i,j="taotao"]=['pengpeng']
console.log(j)
// ****************************
//对象的解构赋值
let {foo,bar} = {foo:'JSPang',bar:'技术胖'};
console.log(foo+bar); 
//控制台打印出了“JSPang技术胖”,而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
//圆括号的使用，如果已经定义了的变量再结构赋值，必须要用圆括号
let ybb;
(ybb={
    ybb:'sss'
})
// ybb={
//     ybb:'sss'
// }
//很奇怪没有他说的出现问题
console.log(ybb)
//字符串解构
const [a1,b1,c1,d1,e1,f1]="JSPang";
console.log(a1);
console.log(b1);
console.log(c1);
console.log(d1);
console.log(e1);
console.log(f1);