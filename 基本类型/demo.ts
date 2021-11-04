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

class Student {
    fullName:string;
    constructor(public firstName:string,public middleInitial:string,public lastName:string){
        this.fullName = firstName+" " + middleInitial + " " + lastName
    }
}

interface Person{
    firstName:string,
    lastName:string,
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("zhang","sss","zhao")

document.body.innerHTML = greeter(user)

//``模板字符串的应用
let userName:string = "s"
userName = `a${userName}`
console.log(userName);

//数组
//1.类型后加[]
let users:number[] = [1,2,3,5]
//2.数组泛型加类型
let users2:Array<string>  = ['1','2','4']
console.log(users)
console.log(users2)
//元组