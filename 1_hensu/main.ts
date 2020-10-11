/* number型 */
var i: number;
var i: number = 10;
var i = 10; // i: number
console.log('number型の変数iの値は、' + i);

/* string型 */
var str: string;
str = "hello";
console.log('string型の変数strの値は、' + str);

/* any型 */
var x: any = 10;
x = "aaa";
console.log('any型の変数xの値は、' + x);

/* 配列 */
var results: number[];
results = [10, 5, 3];
console.log('配列の1番目の値は、' + results[0]);

/* enum型 */
enum Signal {
  Red = 0,
  Blue = 1,
  Yellow = 2
}
var signal: Signal;
signal = Signal.Yellow;
if (signal === Signal.Yellow) { console.log("enum型のsinglの値はYellow") }
console.log('enum型のSignal.Yellowの値は、' + Signal.Yellow);