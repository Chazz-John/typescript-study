//自定义参数,函数只会校验定义的属性类型,未定义的属性类型依然不会检查
function printLabel(labelledObj) {
    console.log(labelledObj);
}
let myObj = { size: 10, label: "size 10 object" };
printLabel(myObj); //{size: 10, label: 'size 10 object'}
function printLabel1(labelledObj) {
    console.log(labelledObj);
}
// myObj 不一定必须实现LabelledValue接口
let myObj1 = { size: 10, label: "Size 10 object" };
// 同第一种定义方式
// 只要传入的对象数据属性包含必要的属性,且类型相同,依然可以通过校验
printLabel1(myObj1); //{size: 10, label: 'Size 10 object'}
// 定义一个返回值为对象的函数
function createSquare(config) {
    //设置默认值
    let newSquare = { color: 'withe', area: 100 };
    //根据传入的参数属性值,设置数据
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({ color: "black" });
console.log(mySquare);
let p1 = { x: 20, y: 20 };
//TS2540: Cannot assign to 'x' because it is a read-only property.
// p1.x = 1;
//只读数组
let a = [1, 2, 3, 4];
let ro = a;
function createSquare2(config) {
    console.log(config); //{colour: 'red', width: 100}
    //设置默认值
    let newSquare = { color: 'withe', area: 100 };
    //根据传入的参数属性值,设置数据
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
// 当color属性不存在时
// 使用as interface 类型断言绕过检测
// 不使用类型断言无法通过参数校验,错误信息: 
// Argument of type '{ colour: string; width: number; }' is not assignable to parameter of type 'SquareConfig'.
let mySquare2 = createSquare2({ colour: 'red', width: 100 });
//定义一个变量,实现这个接口函数,接口的形参名可以接口定义的不同
let myIn = function (str, subStr) {
    return str.search(subStr) > -1;
};
//实现类类型接口
class myClass {
    //这里的方法只需要方法名相同即可?参数和返回值都不同,没有错误提示
    getData() {
        return '';
    }
}
let square = {};
square.color = "blue";
square.sideLength = 10;
//# sourceMappingURL=demo.js.map