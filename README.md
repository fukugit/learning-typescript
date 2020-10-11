# learning-typescript
TypeScriptの勉強用リポジトリです。

## このプロジェクトの構成  
| ディレクトリ               | 概要    |
| -------------------- | ----- |
| [1_hensu](./1_hensu) | 変数定義 |

## ローカルでの実行方法
このプロジェクトで用意されたTypeScriptを動かす方法を説明します。

### 必要なアプリケーション
1. Node.js  
2. TypeScript  

### インストール
以下はTypeScriptのインストール方法です。
```
npm install -g typescript
```

### 実行方法
[1_hensu](./1_hensu)を例にtsファイルの実行方法について説明します。  

まずはtsファイルが設置されているディレクトリへ移動します。  
```
cd 1_hensu
```
tsファイルをjavascriptファイルにビルドします。  
```
tsc main.ts
```

ビルド後に作成されたjavascriptファイルを実行します。  
```
node main.js 
```

## 参考にしたサイト
