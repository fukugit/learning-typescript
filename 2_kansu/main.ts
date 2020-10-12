
/* 
  関数を定義します。
  末尾のnumber は戻り値の型です。
  bの後の?は、値があるか空が不明の変数ということを意味しています。
 */
function add(a: number, b?: number): number {
  if (b) {
    // bが存在する場合
    return a + b;
  } else {
    // bが空の場合
    return a;
  }
}
console.log(add(5));

/* 
  戻り値無しの場合は、voidを設定します。
  bに何も指定されなかった場合は10が初期値となります。
 */
function show(a: number, b: number = 10): void {
  console.log(add(a, b));
}
show(5, 3);
show(5);

// アロー関数で定義します。
var add2 = (a: number, b: number): number => {
  return a + b;
}
console.log(add2(1,3));

// 1文のみであれば以下のように簡潔に書くことができます。
var add3 = (a: number, b: number): number => a + b;
console.log(add3(1,3));

/* 
  オーバーロードで書くことも可能です。
  以下の例であれば、以下2通りの引数の指定方法が可能です。
  add4(1,3)
  add4("hello","world")
 */
function add4 (a: number, b: number): number;
function add4 (a: string, b: string): string;
function add4 (a: any, b: any): any {
  if (typeof a === "string" && typeof b === "string") {
    return a + " " + b;
  }
  return a + b;
}
console.log(add4(1,3));
console.log(add4("hello","world"));
// 以下のように宣言されていないシグニチャを指定するとコンパイルエラーになります。
// console.log(add4(1,"world"));

