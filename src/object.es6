//对象赋值
let name="yyt";
let skill="pc";
let obj={
    name,
    skill
}
console.log(obj)
// 构建key值，有时候对象的属性名都不确定
let ke="name";
let obj1={
    [ke]:"web"
}
console.log(obj1)
//合并对象
let a={
    a:'js'
};
let b={
    b:'css'
};
let c={
    c:"web"
}
let d= Object.assign(a,b,c);
console.log(d)
