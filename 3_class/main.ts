/* 
  classの一般的な使い方です。
 */
class User {
  /* 
    publicは省略可能です。
   */
  public name: string;
  public constructor(name: string) {
    this.name = name;
  }
  public sayHello(): void {
    console.log("Hi, I am " + this.name);
  }
}
var tom = new User("Tom");
tom.sayHello();

/* 
  メンバ変数の定義を簡略化したクラスです。
 */
class User2 {
  /*
  public name: string;
  public constructor(name: string) {
    this.name = name;
  }
  */
  // 上記を1文で書くこともできます。
  constructor(public name: string){
  }
  public sayHello(): void {
    console.log("Hi, I am " + this.name);
  }
}
var frank = new User2("Frank");
frank.sayHello();

/* 
  メンバ変数をprivat宣言したクラスです。
 */
class User3 {
  // privateメンバ変数は先頭に _ を付けることがTypeScriptの慣習のようです。
  constructor(private _name: string){
  }
  public sayHello(): void {
    console.log("Hi, I am " + this._name);
  }
  // Getter メソッドです。
  // tsc main.ts -t ES5 でコンパイルする必要があります。
  get name() {
    return this._name;
  }
  // Setter メソッドです。
  // tsc main.ts -t ES5 でコンパイルする必要があります。
  set name(newValue: string) {
    this._name = newValue;
  }
}
var mike = new User3("Mike");
mike.sayHello()