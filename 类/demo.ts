
//类的基本使用
class Greeter{
	greeting:string
	constructor(message : string){
		this.greeting = message
	}
	greeter() :string {
		return "Hello, " + this.greeting;
	}
}
let greeterObj = new Greeter("world");
greeterObj.greeter()

//继承的基本使用
class Animal {
	move(distanceInMeters:number = 0){
		console.log(`Animal moved ${distanceInMeters}m.`);
	}
}
class Dog extends Animal {
	bark(){
		console.log("Woof! Woof!")
	}
}

const dog = new Dog()
dog.bark()
dog.move(10)
dog.bark()

//子类实现父类方法
class Animal2 {
	name:string
	constructor(thisName:string){
		this.name = thisName
	}
	move(distanceInMeters:number = 0){
		console.log(`${this.name} move ${distanceInMeters}m.`)
	}
}
class snake extends Animal2 {

	constructor(name:string) {
		super(name)
	}

	move(distanceInMeters: number = 0) {
		console.log("Slithering...")
		super.move(distanceInMeters);
	}
}

class Horse extends Animal2 {
	constructor(thisName: string) {
		super(thisName);
	}

	move(distanceInMeters: number = 0) {
		console.log("Galloping...")
		super.move(distanceInMeters);
	}
}

let sam = new snake("sammy the python")
let tom:Animal2 = new Horse("tommy the Palomino")

sam.move()
tom.move(34)

//readonly 关键字修饰的属性必须在声明时或者构造函数里被初始化
class Octopus{
	readonly name : string;
	readonly numberOfLegs : number = 8;

	constructor(name: string) {
		this.name = name;
	}
}
let dad = new Octopus("Man with the 8 strong legs" );
//TS2540: Cannot assign to 'name' because it is a read-only property.
// 尝试赋值给常量或只读变量
// dad.name = "Man with the 3-piece suit"
//存取器
let passcode = 'secret passcode'
class Employee{
	private _fullName : string;
	get fullName(): string {
		return this._fullName;
	}
	set fullName(newName: string) {
		if (passcode && passcode==='secret passcode') {
			this._fullName = newName;
		}else {
			console.log('error:unauthorized update of employee!')
		}
	}
}
let employee = new Employee()
employee.fullName = "Bob Smith"
if (employee.fullName){
	console.log(employee.fullName)
}