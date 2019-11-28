# 請說明以下程式碼會輸出什麼，以及盡可能詳細地解釋原因。

```
for(var i=0; i<5; i++) {
  console.log('i: ' + i);
  setTimeout(() => {
    console.log(i)
  }, i * 1000);
}
```
1. 在 for 迴圈，定義 i = 0, i < 5; i++;
2. i = 0 且 i < 5, 將 `console.log(0)` 放入 Call Stack ，然後執行，console 出 0
3. 將 `setTimeout(..., i*1000)` 放入 Call Stack，然後放在 Web APIs 計時 0 秒，時間到後放入 Call Queue，等待 Call Stack 清空（等待數量 = 1）
4. i++, i = 1 且 i < 5, 將 `console.log(1)` 放入 Call Stack ，然後執行，console 出 1
5. 將 `setTimeout(..., i*1000)` 放入 Call Stack，然後放在 Web APIs 計時 1 秒，時間到後放入 Call Queue，等待 Call Stack 清空（等待數量 = 2）
6. i++, i = 2 且 i < 5, 將 `console.log(2)` 放入 Call Stack ，然後執行，console 出 2
7. 將 `setTimeout(..., i*1000)` 放入 Call Stack，然後放在 Web APIs 計時 2 秒，時間到後放入 Call Queue，等待 Call Stack 清空（等待數量 = 3）
8. i++, i = 3 且 i < 5, 將 `console.log(3)` 放入 Call Stack ，然後執行，console 出 3
9. 將 `setTimeout(..., i*1000)` 放入 Call Stack，然後放在 Web APIs 計時 3 秒，時間到後放入 Call Queue，等待 Call Stack 清空（等待數量 = 4）
10. i++, i = 4 且 i < 5, 將 `console.log(4)` 放入 Call Stack ，然後執行，console 出 4
11. 將 `setTimeout(..., i*1000)` 放入 Call Stack，然後放在 Web APIs 計時 4 秒，時間到後放入 Call Queue，等待 Call Stack 清空（等待數量 = 5）
12. i++, i = 5 且 i 不小於 5, for 迴圈結束，監測到 stack 為空，將 Callback Queue 裡面的 `() => { console.log(i) }` 放入 Call stack 執行，依序 console 出 5 個 5
