// 命名函数,,可以完全按照js的写法编写
function add(x,y) {
  return x + y;
}

//匿名函数
let myAdd = function(x, y) {
    return x+y;
}

//函数类型,为函数参数和返回值设置类型
//TypeScript能够根据返回语句自动推断出返回值类型，通常可以省略它。
function add1(x:number, y:number) :number {
  return x+y;
}
let myAdd1 = function (x:number,y : number):number{
  return x+y;
}

//完整的函数类型
let myAdd2 :
  (x:number, y:number) => number//用箭头函数定函数
  = function (x:number, y:number) :number{//用匿名函数实现这个函数定义,参数名不一定相同,参数类型相同即可
    return x+y;
}

//类型推断,通过实现函数定义的方式推断出参数类型
// myAdd has the full function type
let myAdd3 = function(x: number, y: number): number { return x + y; };

// The parameters `x` and `y` have the type number
let myAdd4: (baseValue: number, increment: number) => number =
  function(x, y) { return x + y; };

//可选参数和默认参数 标识符: ?,可选参数的位置必须在最后定义
function buildName(firstName:string,lastName?:string) {
  if (lastName){
    return firstName + lastName;
  }else return firstName;
}
let result1 = buildName('Bob');
let result2 = buildName('Bob','Adams');

//在参数定义时,设置默认值,同时可以触发类型
function buildName2(firstName:  string, lastName = "Smith") {
  return firstName + " " + lastName;
}

let result11 = buildName2("Bob");                  // works correctly now, returns "Bob Smith"
let result12 = buildName2("Bob", undefined);       // still works, also returns "Bob Smith"
// let result13 = buildName2("Bob", "Adams", "Sr.");  // error, too many parameters
let result14 = buildName2("Bob", "Adams");

//剩余参数 标识符: ...
function buildName3(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName3("Joseph", "Samuel", "Lucas", "MacKinzie");

//this在ts中的用法
// 1.this和箭头函数
let deck = {
  suits:['hearts','spades','clubs','diamonds'],
  card:Array(52),
  createCardPicker:function() {
      return ()=>{
        let pickedCard = Math.floor(Math.random() * 52);
        let pickedSuit = Math.floor(pickedCard / 13);
        // 直接使用this Uncaught TypeError: Cannot read properties of undefined (reading '3')
        // 因为直接返回函数时,返回的函数中的this被定义为了window对象
        // 如果使用箭头函数,则会将this指向当前对象.箭头函数能保存函数创建时的this值，而不是调用时的值
        return {suit: this.suits[pickedSuit], card: pickedCard % 13};
      }
  }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit);

// this 作为参数,对this的类型进行定义
// 这样在调用this时智能提示能能够正确提示当前this的属性和方法
interface Card{
  suit:string;
  card:number
}
interface Deck {
  suits: string[],
  cards: number[];

  createCardPicker(this: Deck): () => Card;
}
let deck2 :Deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker: function(this:Deck) {
    return ()=>{
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);

      return {suit: this.suits[pickedSuit], card: pickedCard % 13};
    }
  }
}
let cardPicker1 = deck2.createCardPicker();
let pickedCard1 = cardPicker1();

alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

// this 在回调函数中的使用
// 函数的重载

