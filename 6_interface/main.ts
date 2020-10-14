/* 
  インターフェースの前に関数へオブジェクトを渡す方法を見てみる。
 */
function getTotal1(result: {a: number, b: number}) {
  return result.a + result.b;
}
var result1 = {
  a: 1,
  b: 2,
}
console.log(getTotal1(result1));

/* 
  上記のオブジェクト部分をインターフェース宣言します。
 */
interface Result {
  a: number,
  b: number,
}
function getTotal2(result: Result) {
  return result.a + result.b;
}
var result2 = {
  a: 1,
  b: 2,
  c: "hello",  // インターフェースに定義されていないメンバ変数があってもOK。 これは構造的部分型といいます。
}
console.log(getTotal2(result2));

/* 
  インターフェースを継承します。
  インターフェースは複数個継承することが可能です。Javaと同じ
*/
interface SpringResult {
  a: number;
}
interface FallResult {
  b: number;
}
interface FinalResult extends SpringResult, FallResult {
  c?: number;  // 一部の変数をオプション（Null化)にすることも可能です。
}
function getTotal3(result: FinalResult) {
  // c があるかどうかを確認します。
  if (result.c) {
    return result.a + result.b + result.c;
  }
  return result.a + result.b;
}
var result3 = {
  a: 1,
  b: 2,
  c: 3,
}
var result4 = {
  a: 1,
  b: 2,
}
console.log(getTotal3(result3));
console.log(getTotal3(result4));

/* 
  インターフェースを継承してクラスを実装します。
 */
interface GameUser {
  score: number;
  showScore(): void;
}
class User7 implements GameUser {
  score: number = 0;
  showScore(): void {
    console.log("score : " + this.score);
  }
}
var user7 = new User7();
user7.showScore();