//类的基本使用
class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greeter() {
        return "Hello, " + this.greeting;
    }
}
let greeterObj = new Greeter("world");
greeterObj.greeter();
//继承的基本使用
class Animal {
    move(distanceInMeters = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}
class Dog extends Animal {
    bark() {
        console.log("Woof! Woof!");
    }
}
const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
//子类实现父类方法
class Animal2 {
    constructor(thisName) {
        this.name = thisName;
    }
    move(distanceInMeters = 0) {
        console.log(`${this.name} move ${distanceInMeters}m.`);
    }
}
class snake extends Animal2 {
    constructor(name) {
        super(name);
    }
    move(distanceInMeters = 0) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}
class Horse extends Animal2 {
    constructor(thisName) {
        super(thisName);
    }
    move(distanceInMeters = 0) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}
let sam = new snake("sammy the python");
let tom = new Horse("tommy the Palomino");
sam.move();
tom.move(34);
//readonly 关键字修饰的属性必须在声明时或者构造函数里被初始化
class Octopus {
    constructor(name) {
        this.numberOfLegs = 8;
        this.name = name;
    }
}
let dad = new Octopus("Man with the 8 strong legs");
//TS2540: Cannot assign to 'name' because it is a read-only property.
// 尝试赋值给常量或只读变量
// dad.name = "Man with the 3-piece suit"
//存取器
let passcode = 'secret passcode';
class Employee {
    get fullName() {
        return this._fullName;
    }
    set fullName(newName) {
        if (passcode && passcode === 'secret passcode') {
            this._fullName = newName;
        }
        else {
            console.log('error:unauthorized update of employee!');
        }
    }
}
let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}
//静态属性  static修饰符
class Grid {
    constructor(scale) {
        this.scale = scale;
    }
    calculateDistanceFromOrigin(point) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * xDist) / this.scale;
    }
}
Grid.origin = { x: 0, y: 0 };
let grid = new Grid(1.0);
let grid2 = new Grid(5.0);
console.log(grid.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
//抽象类,抽象类中的抽象方法,在派生类中必须实现
class AnimalAbstract {
    move() {
        console.log('roaming the earth...');
    }
}
//抽象类和派生类
class Department {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log('Department name is' + this.name);
    }
}
class AccountingDepartment extends Department {
    constructor() {
        super('Accounting and auditing'); // 在派生类的构造函数中必须调用 super()
    }
    printMeeting() {
        console.log('The Accounting Department meets each Monday at 10am.');
    }
    generateReports() {
        console.log('Generating accounting reports...');
    }
}
let department; // 允许创建一个对抽象类型的引用
// department = new Department(); // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
// department.generateReports(); // 错误: 方法在声明的抽象类中不存在
//类的高级用法---构造函数,初始化属性
class Greeter1 {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "hello, " + this.greeting;
    }
}
let greeter1;
greeter1 = new Greeter1("world");
console.log(greeter1.greet());
