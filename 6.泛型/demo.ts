//泛型的基本使用
function identity<T>(arg : T):T {
  return arg;
}
let output = identity<string>("hello word")
console.log(output);