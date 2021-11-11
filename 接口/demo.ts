
//自定义参数,函数只会校验定义的属性类型,未定义的属性类型依然不会检查
function printLabel(labelledObj:{label : string}) {
  console.log(labelledObj);
}
let myObj = {size:10,label : "size 10 object"}
printLabel(myObj)//{size: 10, label: 'size 10 object'}

// 通过接口定义参数
interface LabelledValue{
  label:string
}
function printLabel1(labelledObj:LabelledValue) {
  console.log(labelledObj)
}
// myObj 不一定必须实现LabelledValue接口
let myObj1 = {size:10,label : "Size 10 object"}
// 同第一种定义方式
// 只要传入的对象数据属性包含必要的属性,且类型相同,依然可以通过校验
printLabel1(myObj1)//{size: 10, label: 'Size 10 object'}

//可选参数标识符'?'
interface SquareConfig{
  color?:string;
  width?:number;
}
// 定义一个返回值为对象的函数
function createSquare(config:SquareConfig): {color:string,area:number}{
  //设置默认值
  let newSquare = {color:'withe',area:100}
  //根据传入的参数属性值,设置数据
  if (config.color){
    newSquare.color = config.color
  }
  if (config.width){
    newSquare.area = config.width * config.width
  }
  return newSquare
}
let mySquare = createSquare({color:"black"})
console.log(mySquare);

//只读属性接口
interface Point{
  readonly x : number;
  readonly y : number;
}
let p1:Point = {x : 20, y : 20}
//TS2540: Cannot assign to 'x' because it is a read-only property.
// p1.x = 1;

//只读数组
let a: number[] = [1,2,3,4]
let ro : ReadonlyArray<number> = a
//TS2542: Index signature in type 'readonly number[]' only permits reading.
// ro[0] = 12
//TS2542：'readonly number[]' 类型的索引签名只允许读取。 ro[0] = 12
// ro.push(5)

//readonly 和const
//最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。
//做为变量使用的话用const，若做为属性则使用readonly。

//额外的类型检测
interface SquareConfig{
  color?:string,
  width?:number
}
function createSquare2(config:SquareConfig):{color:string,area : number} {
  console.log(config);//{colour: 'red', width: 100}
  //设置默认值
  let newSquare = {color:'withe',area:100}
  //根据传入的参数属性值,设置数据
  if (config.color){
    newSquare.color = config.color
  }
  if (config.width){
    newSquare.area = config.width * config.width
  }
  return newSquare
}

// 使用as interface 类型断言绕过检测
// 不使用类型断言无法通过参数校验: Argument of type '{ colour: string; width: number; }' is not assignable to parameter of type 'SquareConfig'.
let mySquare2 = createSquare2({colour:'red',width:100} as SquareConfig);

//字符串索引签名
interface SquareConfig{
  color?:string
  width?:number
  [propName:string] : any
}