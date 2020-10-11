
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

/* 
  戻り値無しの場合は、voidを設定します。
  bに何も指定されなかった場合は10が初期値となります。
 */
function show(a: number, b: number = 10): void {
  console.log(add(a, b));
}

show(5, 3);
show(5);
console.log(add(5));