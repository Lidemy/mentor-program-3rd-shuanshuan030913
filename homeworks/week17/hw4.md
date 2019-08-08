# 請說明以下程式碼會輸出什麼，以及盡可能詳細地解釋原因。

```
const obj = {
  value: 1,
  hello: function() {
    console.log(this.value)
  },
  inner: {
    value: 2,
    hello: function() {
      console.log(this.value)
    }
  }
}

const obj2 = obj.inner
const hello = obj.inner.hello
obj.inner.hello() // ??
obj2.hello() // ??
hello() // ??
```

1. `obj.inner.hello()` 的 this 值 = obj.inner，所以 obj.inner.value = 2

2. `obj2.hello()`

obj2 = 一個新的 object，相當於
```
const obj2 = {
  value: 2,
  hello: function() {
    console.log(this.value)
  }
}
```
`obj2.hello()` 的 this 值 = obj2，則 obj2.value = 2

3. `hello()`

因為 this 的值和被定義在哪裡無關，和 function 怎麼被呼叫有關，所以 `hello()` 相當於
```
function hello() {
  console.log(this);
}
hello();
```

結果等於 undefind
