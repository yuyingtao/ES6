'use strict';

//字符串模板
//``，简单的计算
var a = '11';
var bb = 'aaa' + a;
//字符串查找功能
var jspang = '技术胖';
var blog = '非常高兴你能看到这篇文章，我是你的老朋友技术胖。这节课我们学习字符串模版。';
console.log(blog.indexOf(jspang));
console.log(blog.includes(jspang));
console.log(blog.startsWith(jspang));
console.log(blog.endsWith(jspang));
//复制字符串
document.write('jspang|'.repeat(3));