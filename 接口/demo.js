//自定义参数,函数只会校验定义的属性类型,未定义的属性类型依然不会检查
function printLabel(labelledObj) {
    console.log(labelledObj);
}
var myObj = { size: 10, label: "size 10 object" };
printLabel(myObj); //{size: 10, label: 'size 10 object'}
function printLabel1(labelledObj) {
    console.log(labelledObj);
}
// myObj 不一定必须实现LabelledValue接口
var myObj1 = { size: 10, label: "Size 10 object" };
// 同第一种定义方式
// 只要传入的对象数据属性包含必要的属性,且类型相同,依然可以通过校验
printLabel1(myObj1); //{size: 10, label: 'Size 10 object'}
// 定义一个返回值为对象的函数
function createSquare(config) {
    //设置默认值
    var newSquare = { color: 'withe', area: 100 };
    //根据传入的参数属性值,设置数据
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
console.log(mySquare);
var p1 = { x: 20, y: 20 };
//TS2540: Cannot assign to 'x' because it is a read-only property.
// p1.x = 1;
//只读数组
var a = [1, 2, 3, 4];
var ro = a;
function createSquare2(config) {
    console.log(config);
    //设置默认值
    var newSquare = { color: 'withe', area: 100 };
    //根据传入的参数属性值,设置数据
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare2 = createSquare2({ colour: 'red', width: 100 });
