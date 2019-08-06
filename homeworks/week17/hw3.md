# 請說明以下程式碼會輸出什麼，以及盡可能詳細地解釋原因。

```
var a = 1
function fn(){
  console.log(a)
  var a = 5
  console.log(a)
  a++
  var a
  fn2()
  console.log(a)
  function fn2(){
    console.log(a)
    a = 20
    b = 100
  }
}
fn()
console.log(a)
a = 10
console.log(a)
console.log(b)
```

1. 最外層宣告 - 在 global 的執行環境 Execution Contexts(EC) 下，variable object (VO) 儲存宣告的變數和函式
```
global VO {
  a: undefind
  fn: function fn()
}
```
2. 開始執行 global
   var a = 1
```
global VO {
  a: 1
  fn: function fn()
}
```
   遇到 fn() ，進入 fn()，在 fn() 的 EC 下，儲存 VO
```
fn VO {
  a: undefind // 沒有 a 的函式被提升，但是有 a 變數，所以 a 被宣告成 undefind
  fn2: function fn2()
}

global VO {
  a: 1
  fn: function fn()
}
```
3. 開始執行 fn()
   `console.log(a) // undefind`
   var a = 5，所以 a 被賦值 = 5
```
fn VO {
  a: 5
  fn2: function fn2()
}

global VO {
  a: 1
  fn: function fn()
}
```
   `console.log(a) // 5`
   a++
```
fn VO {
  a: 6
  fn2: function fn2()
}

global VO {
  a: 1
  fn: function fn()
}
```
   var a 不影響
4. 遇到 fn2()，進入 fn2()，在 fn2() 的 EC 下，儲存 VO
```
fn2 VO {
  無宣告變數也沒有函數
}

fn VO {
  a: 6
  fn2: function fn2()
}

global VO {
  a: 1
  fn: function fn()
}
```
5. 開始執行 fn2()
   `console.log(a) // 6` (這一層沒有 a，往上一層找，fn() 中 a: 6)
   執行 a = 20
```
fn2 VO {
  無宣告變數也沒有函數
}

fn VO {
  a: 20 // fn2() 找不到 a 所以回上一層找，並賦值
  fn2: function fn2()
}

global VO {
  a: 1
  fn: function fn()
}
```
   執行 b = 100
```
fn2 VO {
  無宣告變數也沒有函數
}

fn VO {
  a: 20
  fn2: function fn2()
}

global VO {
  a: 1
  fn: function fn()
  b: 100 // 都找不到宣告 b，於是在最外面宣告並賦值
}
```
6. fn2() 結束，pop 掉 fn2()，回到 fn() 繼續執行
   `console.log(a) // 20`

7. fn() 結束，pop 掉 fn()，回到 global 繼續執行
   `console.log(a) // 1`
   執行 a = 10
```
global VO {
  a: 10
  fn: function fn()
  b: 100
}
```
   `console.log(a) // 10`
   `console.log(b) // 100`

8. global 結束，pop 掉 global，至此程式全部執行完畢，console 依序顯示為
```
undefind
5
6
20
1
10
100
```

