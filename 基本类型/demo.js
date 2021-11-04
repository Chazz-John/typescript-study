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
document.body.innerHTML = greeter(user);
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
