/* 
  外部モジュールを使ってみます。
  まず外部モジュールとは、について簡単に説明します。
  以下のような3rd partyライブラリが提供するモジュールを外部モジュールと呼びます。
  そして、以下はそれぞれにビルドの方式が「CommonJS形式」と「AMD形式」の２つがあります。
  このソースではそれぞれ２つの形式のビルドを確認していきます。
    Node - CommonJS
    RequireJS - AMD

  CommonJS方式のビルドは、 tsc main.ts -m commonjs 
  AMD方式のビルドは、 tsc main.ts -m amd  <<  ビルドは通るけどjs実行時に「ReferenceError: define is not defined」が発生します。（？）
 */

import User = require("./user_commonjs");
console.log(User.name1);

import AMD = require("./user_amd");
console.log(AMD.name2);