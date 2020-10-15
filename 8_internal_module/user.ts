module AdminModule {
  export var name = "admin";
  // モジュールは入れ子にすることが可能です。
  export module AdminAddressModule {
    export var zip = "222-2222";
  }
}