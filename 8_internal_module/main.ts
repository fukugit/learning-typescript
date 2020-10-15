/* 
  内部モジュールを使ってみます。
  外部ファイルの user.tsにも内部モジュールを定義していて、それを読み込んでいるので下記でビルドする必要があります。
  tsc main.ts --out main.js
 */
// user.tsを読み込んでいるパートです。必ず先頭行にないとビルドエラーになります。
/// <reference path="./user.ts" />

module UserModule {
  // exportをつけないと外部から参照できません。
  export var name = "name";
  // モジュールは入れ子にすることが可能です。
  export module AddressModule {
    export var zip = "111-1111";
  }
}
console.log(UserModule.name);
console.log(UserModule.AddressModule.zip);


/* 
  モジュール名が長い場合は短くすることもできます。
 */
import addr = UserModule.AddressModule;
console.log(addr.zip);

console.log(AdminModule.name);
console.log(AdminModule.AdminAddressModule.zip);