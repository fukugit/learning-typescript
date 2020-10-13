/* 
  protected を使うことで子クラスからもその変数が参照できるようになります。
 */
class User5 {
  constructor(protected _name: string){
  }
  public sayHello(): void {
    console.log("Hi, I am " + this._name);
  }
  get name() {
    return this._name;
  }
  set name(newValue: string) {
    this._name = newValue;
  }
}

class AdminUser extends User5 {
  private _age: number;
  constructor(_name: string, _age: number) {
    super(_name);
    this._age = _age;
  }
  public sayHello() {
    console.log("my age : " + this._age);
    super.sayHello();
  }
}

var bob = new AdminUser("Bob", 23);
bob.sayHello();