/* 
  考え方はJavaのジェネリクスと同じです。
  以下の２つの関数だと、処理が同じで引数の型が違うだけです。
  この場合はJavaと同じようにジェネリクスを使います。
 */
function getStringArray(value: string): string[] {
     return [value, value, value];
}
function getNumberArray(value: number): number[] {
     return [value, value, value];
}

/* 
  ジェネリクスを使っています。
 */
function getArray<T>(value: T): T[] {
  return [value, value, value];
}
console.log(getArray<number>(3));
console.log(getArray<string>("hello"));

/* 
  ジェネリクスをクラスで使っていきます。
  こちらもJavaと同じです。
 */
class MyData<T> {
  constructor(public value: T){};
  getArray(): T[] {
    return [this.value, this.value, this.value];
  }
}
var v1 = new MyData<string>("hello");
console.log(v1.getArray());
var v2 = new MyData<number>(234);
console.log(v2.getArray());

/* 
  ジェネリクスに特定の型の継承のみを許可します。
 */
interface Result {
  a: number,
  b: number,
}
class MyData2<T extends Result> {
  constructor(public value: T){};
  getArray(): T[] {
    return [this.value, this.value, this.value];
  }
}
var v3 = new MyData<Result>({a:1, b:2});
console.log(v3.getArray());

/* 
  Result を継承したインターフェースもOKです。
 */
interface FinalResult2 extends Result {
  c: number,
}
var v4 = new MyData<FinalResult2>({a:1, b:2, c:3});
console.log(v4.getArray());