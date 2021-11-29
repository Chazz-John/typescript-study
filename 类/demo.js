var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//类的基本使用
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greeter = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeterObj = new Greeter("world");
greeterObj.greeter();
//继承的基本使用
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("Animal moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log("Woof! Woof!");
    };
    return Dog;
}(Animal));
var dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
//子类实现父类方法
var Animal2 = /** @class */ (function () {
    function Animal2(thisName) {
        this.name = thisName;
    }
    Animal2.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " move " + distanceInMeters + "m.");
    };
    return Animal2;
}());
var snake = /** @class */ (function (_super) {
    __extends(snake, _super);
    function snake(name) {
        return _super.call(this, name) || this;
    }
    snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return snake;
}(Animal2));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(thisName) {
        return _super.call(this, thisName) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("Galloping...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animal2));
var sam = new snake("sammy the python");
var tom = new Horse("tommy the Palomino");
sam.move();
tom.move(34);
//readonly 关键字修饰的属性必须在声明时或者构造函数里被初始化
var Octopus = /** @class */ (function () {
    function Octopus(name) {
        this.numberOfLegs = 8;
        this.name = name;
    }
    return Octopus;
}());
var dad = new Octopus("Man with the 8 strong legs");
//TS2540: Cannot assign to 'name' because it is a read-only property.
// 尝试赋值给常量或只读变量
// dad.name = "Man with the 3-piece suit"
