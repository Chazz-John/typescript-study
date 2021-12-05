// 命名函数,,可以完全按照js的写法编写
function add(x, y) {
    return x + y;
}
//匿名函数
var myAdd = function (x, y) {
    return x + y;
};
//函数类型,为函数参数和返回值设置类型
//TypeScript能够根据返回语句自动推断出返回值类型，通常可以省略它。
function add1(x, y) {
    return x + y;
}
var myAdd1 = function (x, y) {
    return x + y;
};
//完整的函数类型
var myAdd2 = function (x, y) {
    return x + y;
};
//类型推断,通过实现函数定义的方式推断出参数类型
// myAdd has the full function type
var myAdd3 = function (x, y) { return x + y; };
// The parameters `x` and `y` have the type number
var myAdd4 = function (x, y) { return x + y; };
//可选参数和默认参数 标识符: ?,可选参数的位置必须在最后定义
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + lastName;
    }
    else
        return firstName;
}
var result1 = buildName('Bob');
var result2 = buildName('Bob', 'Adams');
//在参数定义时,设置默认值,同时可以触发类型
function buildName2(firstName, lastName) {
    if (lastName === void 0) { lastName = "Smith"; }
    return firstName + " " + lastName;
}
var result11 = buildName2("Bob"); // works correctly now, returns "Bob Smith"
var result12 = buildName2("Bob", undefined); // still works, also returns "Bob Smith"
// let result13 = buildName2("Bob", "Adams", "Sr.");  // error, too many parameters
var result14 = buildName2("Bob", "Adams");
//剩余参数 标识符: ...
function buildName3(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildName3("Joseph", "Samuel", "Lucas", "MacKinzie");
//this在ts中的用法
// 1.this和箭头函数
var deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    card: Array(52),
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            // 直接使用this Uncaught TypeError: Cannot read properties of undefined (reading '3')
            // 因为直接返回函数时,返回的函数中的this被定义为了window对象
            // 如果使用箭头函数,则会将this指向当前对象.箭头函数能保存函数创建时的this值，而不是调用时的值
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
var deck2 = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker1 = deck2.createCardPicker();
var pickedCard1 = cardPicker1();
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);
// this 在回调函数中的使用
// 函数的重载
