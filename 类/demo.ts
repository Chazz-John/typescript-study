
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

//静态属性  static修饰符
class Grid{
	x : number;
	y : number;
	static origin = {x:0,y : 0}
	calculateDistanceFromOrigin(point:{x:number,y:number}){
		let xDist = (point.x-Grid.origin.x);
		let yDist = (point.y-Grid.origin.y);
		return Math.sqrt(xDist * xDist+yDist * xDist)/this.scale;
	}

	constructor(public scale:number) {}
}

let grid = new Grid(1.0);
let grid2 = new Grid(5.0)
console.log(grid.calculateDistanceFromOrigin({x: 10, y: 10}))
console.log(grid2.calculateDistanceFromOrigin({x : 10, y : 10}))

//抽象类,抽象类中的抽象方法,在派生类中必须实现
abstract  class AnimalAbstract{
	abstract makeSound():void;
	move():void{
		console.log('roaming the earth...')
	}
}
//抽象类和派生类
abstract class Department {
	constructor(public name : string) {
	}
	printName():void{
		console.log('Department name is'+this.name)
	}
	abstract printMeeting():void; // 必须在派生类中实现
}
class AccountingDepartment extends Department {


	constructor() {
		super('Accounting and auditing');// 在派生类的构造函数中必须调用 super()
	}

	printMeeting() {
		console.log('The Accounting Department meets each Monday at 10am.');
	}

	generateReports():void{
		console.log('Generating accounting reports...');
	}
}
let department: Department; // 允许创建一个对抽象类型的引用
// department = new Department(); // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
// department.generateReports(); // 错误: 方法在声明的抽象类中不存在

//类的高级用法---构造函数,初始化属性
class Greeter1{
	greeting : string;

	constructor(message: string) {
		this.greeting = message;
	}
	greet(){
		return "hello, "+this.greeting
	}
}

let greeter1:Greeter1;
greeter1 = new Greeter1("world");
console.log(greeter1.greet())