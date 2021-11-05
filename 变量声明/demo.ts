//变量声明 var、let、const


//var声明可以在包含它的函数，模块，命名空间或全局作用域内部任何位置被访问，包含它的代码块对此没有什么影响。 有些人称此为var作用域或函数作用域。 函数参数也使用函数作用域。
//不推荐在代码代码中使用,我的理解是,var会造成变量作用域穿透,会使代码逻辑出现意想不到的错误

//let 块作用域变量声明可以简单理解为在'{}'内定义的变量在此'{}'内才能使用
function f(input:boolean) {
  let a = 0;
  if (input){
    let b = a +1//能够访问到a
    return b
  }
  // return b//Cannot find name 'b'.
}
f(true)

//const 块作用域静态变量声明
const finalValue = 1
// finalValue = 2 //Cannot assign to 'finalValue' because it is a constant.

//解构赋值
let input :[number,number]= [1,2]
let  [first,second] = input
console.log(first);
console.log(second);
//交换变量
[first,second] = [second,first]
console.log(first);
console.log(second);
//作用于函数参数
function f1([first,second]:[number,number]){
  console.log(first);
  console.log(second);
}
f1(input)