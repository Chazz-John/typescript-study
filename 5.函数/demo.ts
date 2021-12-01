// 命名函数,,可以完全按照js的写法编写
function add(x,y) {
  return x + y;
}

//匿名函数
let myAdd = function(x, y) {
    return x+y;
}

//函数类型,为函数参数和返回值设置类型
//TypeScript能够根据返回语句自动推断出返回值类型，通常可以省略它。
function add1(x:number, y:number) :number {
  return x+y;
}
let myAdd1 = function (x:number,y : number):number{
  return x+y;
}

//完整的函数类型
let myAdd2 :
  (x:number, y:number) => number//用箭头函数定函数
  = function (x:number, y:number) :number{//用匿名函数实现这个函数定义,参数名不一定相同,参数类型相同即可
    return x+y;
}

//类型推断,通过实现函数定义的方式推断出参数类型
// myAdd has the full function type
let myAdd3 = function(x: number, y: number): number { return x + y; };

// The parameters `x` and `y` have the type number
let myAdd4: (baseValue: number, increment: number) => number =
  function(x, y) { return x + y; };

