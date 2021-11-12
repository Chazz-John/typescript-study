// //interface 接口的使用
// interface Person{
//     firstName:string,
//     lastName:string,
// }
// function greeter(person:Person){
//     return "Hello," + person.firstName+person.lastName
// }
// let user = {
//     firstName:"zhang",
//     lastName:"zhao",
// }
// document.body.innerHTML = greeter(user)
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("zhang", "sss", "zhao");
// document.body.innerHTML = greeter(user)
//``模板字符串的应用
var userName = "s";
userName = "a" + userName;
console.log(userName);
//数组
//1.类型后加[]
var users = [1, 2, 3, 5];
//2.数组泛型加类型
var users2 = ['1', '2', '4'];
console.log(users);
console.log(users2);
//元组[类型名,类型名].赋值安装类型定义顺序
var x;
x = ["hello", 23];
console.log(x);
console.log(x[0].substr(1)); //编译通过
// console.log(x[1].substr(1))//demo.ts:55:18 - error TS2339: Property 'substr' does not exist on type 'number'.
//@ts-ignore
x[3] = 'world';
console.log(x);
//@ts-ignore 报错?
// console.log(x[5].toString());//TypeError: Cannot read property 'toString' of undefined
//枚举 可手动赋值,默认递增,值为number类型
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
//any任意类型
var notSure = 2;
notSure = "notSure";
notSure = false;
console.log(notSure);
//Never类型
function error(message) {
    throw new Error(message);
}
//手动抛出错误
//error("??")
function fail() {
    return error("something failed");
}
//方法调用中抛出错误
// fail()
//返回never的函数必须存在无法达到的终点
function infiniteLoop() {
    while (true) {
    }
}
// infiniteLoop()
//类型断言
// let someValue:any = "this is a string"
var someValue = 222; // 并不报错?
//如果someValue是string 则获取字符长度
var strLength = someValue.length;
console.log(strLength); //输出:undefined
