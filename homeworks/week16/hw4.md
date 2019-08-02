## CSS 預處理器是什麼？我們可以不用它嗎？

我們可以用系統性的方式撰寫程式碼，再經過編譯成為我們經常看到的 CSS 架構，撰寫的過程會比純 CSS 來的更加方便好用。
當然也可以不使用它，直接寫 CSS，瀏覽器只看最終 CSS 結果，而不是去讀預處理器的內容。

## 請舉出任何一個跟 HTTP Cache 有關的 Header 並說明其作用。

```
Cache-Control: max-age=30
```
距離上次收到檔案過 30 秒之後快取過期

```
Cache-Control: no-store
```
完全不使用快取

```
Cache-Control: no-cache
```
每次都會發送 Request 去確認是否有新的檔案

## Stack 跟 Queue 的差別是什麼？

* Stack 就像疊盤子，後放上去的會在最上面，先被拿走（First In, Last Out）
* Queue 則是排隊通關的概念，先進去的會先出來（First In, First Out）

## 請去查詢資料並解釋 CSS Selector 的權重是如何計算的（不要複製貼上，請自己思考過一遍再自己寫出來）

CSS 的權重是一個相對比較的概念：

```
* < tag < class < id < inline-style < !important
```

若我們拿進位來比喻的話：

```
*            =         0 （全域，不指定任何對象）
tag          =         1
class        =       1,0
id           =     1,0,0
inline-style =   1,0,0,0
!important   = 1,0,0,0,0
```

所以當我們在寫 CSS 的時候，若 html 為： `<a class="a" id="a" href="#"> test </a>`
CSS如下：

```css
*  { color: #000;}
a  { color: #111;}
.a { color: #222;}
#a { color: #333;}
```

則 a tag 的文字顏色會等於 #333，因為 id 權重大於其他所有 selector

```css
*  { color: #000;} /*  =>     0  */
a  { color: #111;} /*  =>     1  */
.a { color: #222;} /*  =>   1,0  */
#a { color: #333;} /*  => 1,0,0  */
```

這不代表若我們放上很多個 class 總有一天就可以覆蓋 id，重點是，**使用再多的 class 都無法蓋過 id，因為 id 權重必大於 class**

* 由於 !important 會覆蓋所有樣式，不到萬不得已不要用
* 權重無法跨等級覆蓋
* 如果兩個相同權重的選擇器作用在同元素上，以後面的選擇器來比較權重
* 權重相同時，以後面寫上的樣式為優先使用順序

參考資料：[強烈推薦收藏好物 – CSS Specificity (CSS 權重一覽)](https://muki.tw/tech/css-specificity-document/)、[你对CSS权重真的足够了解吗？](https://juejin.im/post/5afa98bf51882542c832e5ec)