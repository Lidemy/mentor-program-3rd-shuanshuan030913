# 在 JavaScript 裡面，一個很重要的概念就是 Event Loop，是 JavaScript 底層在執行程式碼時的運作方式。請你說明以下程式碼會輸出什麼，以及盡可能詳細地解釋原因。

```
console.log(1)
setTimeout(() => {
  console.log(2)
}, 0)
console.log(3)
setTimeout(() => {
  console.log(4)
}, 0)
console.log(5)
```
根據 Event Loop 機制，程式碼會將要執行的程式碼放在 Call Stack 裡面，執行完後釋放掉，所以依據流程會是：

1. 將 `console.log(1)` 放入 Call Stack ，然後執行，console 出 1
2. 將 `setTimeout(() => {console.log(2)}, 0)` 放入 Call Stack，然後放在 Web APIs 去計時，計時 0 秒，時間到，放入 Callback Queue，等待 Stack 清空
3. 將 `console.log(3)` 放入 Call Stack ，然後執行，console 出 3
4. 將 `setTimeout(() => {console.log(4)}, 0)` 放入 Call Stack，然後放在 Web APIs 去計時，計時 0 秒，時間到，放入 Callback Queue，等待 Stack 清空
5. 將 `console.log(5)` 放入 Call Stack ，然後執行，console 出 5
6. 監測到 stack 為空，將 Callback Queue 裡面的 `console.log(2)` 放入 Call stack，然後執行，console 出 2
7. 監測到 stack 為空，將 Callback Queue 裡面的 `console.log(4)` 放入 Call stack，然後執行，console 出 4

結果會顯示：13524

