## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。

* `<aside>`  html5 的語意化標籤之一，定義主要內容以外的內容，通常用在側邊攔
* `<strong>` 強調文字，通常用在行內，替文章的重點文字做 CSS 用，我個人較少用 span
* `<u>` 替文字加上下底線，但因為 CSS 不太好操控，（比如和文字的距離），所以我更傾向用 border-bottom 來加底線樣式


## 請問什麼是盒模型（box modal）

就是 CSS 給一個物件定義的框，並定義內距、外距、邊線、內容的長寬會受到內距和邊線的影響，必須了解這個模型的規則才能有效的寫出好的 CSS 語法。

* box 預設的長寬等於 content + padding + border
* 如果要讓瀏覽器自動幫我們計算(固定寬度)，就使用`box-sizing: border-box;`


## 請問 display: inline, block 跟 inline-block 的差別是什麼？

* `inline` 讓標籤內容可以排在同一個橫排內，margin 和 padding 只對自己有作用（左右可以影響左右元素），影響不到上下行其他物件
* `block` 自己獨佔一排
* `inline-block` inline 和 block 的綜合體，讓物件可以並排又可以占用高度，會因為 html 中間的空白而產生空白，這點要注意

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

* `static` 預設值，和其他物件共同排版
* `relative` 相對定位，以現在的位置做基準點，移動不影響原來占用的空間，其他物件不會受影響，還是在原來該在的位置上
* `absolute` 絕對定位，以最近的定位點做基準點定位，會脫離排版流，後面的物件會遞補上來，就像 absolute 物件不存在（平行空間）
* `fixed` 以視窗為基準點做定位，不論怎麼滾動都不會離開視窗，並脫離排版流，也是在平行空間上