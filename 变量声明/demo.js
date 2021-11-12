//变量声明 var、let、const
var _a;
//var声明可以在包含它的函数，模块，命名空间或全局作用域内部任何位置被访问，包含它的代码块对此没有什么影响。 有些人称此为var作用域或函数作用域。 函数参数也使用函数作用域。
//不推荐在代码代码中使用,我的理解是,var会造成变量作用域穿透,会使代码逻辑出现意想不到的错误
//let 块作用域变量声明可以简单理解为在'{}'内定义的变量在此'{}'内才能使用
function f(input) {
    var a = 0;
    if (input) {
        var b = a + 1; //能够访问到a
        return b;
    }
    // return b//Cannot find name 'b'.
}
f(true);
//const 块作用域静态变量声明
var finalValue = 1;
// finalValue = 2 //Cannot assign to 'finalValue' because it is a constant.
//解构赋值
var input = [1, 2];
var first = input[0], second = input[1];
console.log(first);
console.log(second);
//交换变量
_a = [second, first], first = _a[0], second = _a[1];
console.log(first);
console.log(second);
//作用于函数参数
function f1(_a) {
    var first = _a[0], second = _a[1];
    console.log(first);
    console.log(second);
}
f1(input);
function f2(defultValue) {
    //结构赋值设置默认值.对必须传参的属性设置默认值无意义,默认值不会生效
    var _a = defultValue.a, a = _a === void 0 ? "www.baidu.com" : _a, _b = defultValue.b, b = _b === void 0 ? 100 : _b;
    //不对可变参数进行默认赋值的话,不传参数,b则会undefined
    // let { a, b } = defultValue
    console.log(a, b);
}
//传b的值:2 22
f2({ a: "2", b: 22 });
//传b的值:2 undefined
// f2({a:"2"})
//函数声明进行结构赋值再设置默认值,可实现多个可变参数动态赋值(好像意义不大-.-)
// function f3({a="232",b=232}:{a?:string,b?:number}) {
//   console.log(a,b);
// }
// f3({})//232 232
// f3({a:"23"})//23 232
// f3({b:23})//23 232
// f3({a:"23",b:23})//23 23
//函数声明先设置默认值再进行结构赋值,要么赋值,要么不赋值(也不知道什么场景用-.-)
function f3(_a) {
    var _b = _a === void 0 ? { a: "232", b: 0 } : _a, a = _b.a, b = _b.b;
    console.log(a, b);
}
f3(); //
// f3({a:"23",b:23})//23 23
