# learning-typescript
TypeScriptの勉強用リポジトリです。
<br>

## このプロジェクトの構成  
| ディレクトリ               | 概要    |
| -------------------- | ----- |
| [変数の型について](./1_hensu) | numberとかbooleanとかTSで使える型をまとめています。 |
| [2_kansu](./2_kansu) | 関数定義 |
| [3_class](./3_class) | クラス定義 |
| [4_class_extends](./4_class_extends) | クラスの継承 |
| [5_class_static](./5_class_static) | クラスのStatic変数・メソッド |
| [6_interface](./6_interface) | インターフェース |
| [7_generics](./7_generics) | ジェネリクス |
| [8_internal_module](./8_internal_module) | 内部モジュール |
| [9_external_module](./9_external_module) | 外部モジュール |
<br>

## ローカルでの実行方法
このプロジェクトで用意されたTypeScriptを動かす方法を説明します。
<br>


### 必要なアプリケーション
1. Node.js  
2. TypeScript  
<br>

### インストール
以下はTypeScriptのインストール方法です。
```
npm install -g typescript
```
<br>

### 実行方法
[1_hensu](./1_hensu)を例にtsファイルの実行方法について説明します。  

まずはtsファイルが設置されているディレクトリへ移動します。  
```
cd 1_hensu
```
<br>

tsファイルをjavascriptファイルにビルドします。  
(ES5の機能も使っているので -t ES5 が必要です。)  
(複数tsファイルをビルドしているので、ビルド後は1つのjsにまとめるため --out main.js が必要です。)  
```
tsc main.ts --out main.js -t ES5
```
<br>


[9_external_module](./9_external_module)は外部モジュールを使用しているのでビルド時に下記のオプションが必要です。  
```
tsc main.ts -m commonjs
```
<br>

ビルド後に作成されたjavascriptファイルを実行します。  
```
node main.js 
```
<br>

