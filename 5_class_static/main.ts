
class User6 {
  constructor(protected _name: string){
    User6.count ++;
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
  static count: number = 0;
  static showDescription(): void {
    console.log("this class is about users");
  }
}

var newbob = new User6("Bob");
var newtom = new User6("Tom");
console.log(User6.count);
User6.showDescription();