'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

//结构赋值
//数组结构赋值
var a = 0,
    b = 1,
    c = 2;

console.log(a);
var d = 1,
    e = 2,
    f = 3,
    g = 0,
    h = 1; //左右两边的结构必须一致

console.log(d);
//对象赋值 undfined null 可以设置默认值
//给j 一个默认值pengpeng了
var _ref = ['pengpeng'],
    i = _ref[0],
    _ref$ = _ref[1],
    j = _ref$ === undefined ? "taotao" : _ref$;

console.log(j);
// ****************************
//对象的解构赋值
var _foo$bar = { foo: 'JSPang', bar: '技术胖' },
    foo = _foo$bar.foo,
    bar = _foo$bar.bar;

console.log(foo + bar);
//控制台打印出了“JSPang技术胖”,而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
//圆括号的使用，如果已经定义了的变量再结构赋值，必须要用圆括号
var ybb = void 0;
ybb = {
    ybb: 'sss'
};
// ybb={
//     ybb:'sss'
// }
//很奇怪没有他说的出现问题
console.log(ybb);
//字符串解构

var _JSPang = "JSPang",
    _JSPang2 = _slicedToArray(_JSPang, 6),
    a1 = _JSPang2[0],
    b1 = _JSPang2[1],
    c1 = _JSPang2[2],
    d1 = _JSPang2[3],
    e1 = _JSPang2[4],
    f1 = _JSPang2[5];

console.log(a1);
console.log(b1);
console.log(c1);
console.log(d1);
console.log(e1);
console.log(f1);