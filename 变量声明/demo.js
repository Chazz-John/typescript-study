//变量声明 var、let、const
var _a;
//var声明可以在包含它的函数，模块，命名空间或全局作用域内部任何位置被访问，包含它的代码块对此没有什么影响。 有些人称此为var作用域或函数作用域。 函数参数也使用函数作用域。
//不推荐在代码代码中使用,我的理解是,var会造成变量作用域穿透,会使代码逻辑出现意想不到的错误
//let 块作用域变量声明可以简单理解为在'{}'内定义的变量在此'{}'内才能使用
function f(input) {
    var a = 0;
    if (input) {
        var b = a + 1; //能够访问到a
        alert(b);
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
