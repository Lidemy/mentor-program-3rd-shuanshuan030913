## 十六到二十週心得

#### 第十六週

這週把 SCSS 的官方文件從頭到尾看完了，是 coding 生涯第一次看完官方文件並理解，達成了一個里程碑成就
Cache 的部分理論知識理解了，想想到現在還沒有實作過，之後框架或作品集的時候會加入 Cache 的練習
Stack 和 Queue 的學習是為了下週做鋪陳，不過覺得好像放在一起講比較好(?)，概念也不是太多

#### 第十七週

這週學到很多容易搞不懂的知識，再回去看自己的筆記發現人還是會失憶 QQ ，應該要時不時的回去重看一遍，檢驗筆記有沒有做好的方法就是看有沒有看懂自己做的筆記，我作筆記有個習慣，自己已經知道的東西就不想寫上去，所以我的筆記有時候顯得不夠完整全面，某個角度來說，會刺激自己在忘記以後會去找答案，另一個角度來說，就會變成不太有用的筆記了，只能當關鍵字用 XD

#### 第十八週

這週學到管理工作的工具，Gulp 真的很好用！後來二十週的優化也是用得很開心，比較擔心的是 Webpack 還沒有體會到打包的快感 XD，希望下周開始會打包得很愉快！

#### 第十九週

這週已經是個小複習週了，把前後端都整合起來做出一個較完整的功能，我本來以為自己寫的 api 還可以，結果看到同學都把 php 整合成一頁（為什麼大家都會我都不會！？），頓時覺得自己弱爆了QQ

有時候看同學作業需要勇氣，一不小心就覺得自己寫的東西很糟糕寫成這樣怎麼敢交出去QQ

#### 第二十週

這週主力在玩網頁優化小遊戲，也是在這週和 Gulp 混得很熟，Gulp 超棒，Gulp 超棒，Gulp 超棒！！！
中間遇到 gulp-webp 不能在 win7 上執行，線上轉檔每日限數量也很不方便，作業系統被歧視讓我很受傷，受傷到我決定明天要去買電腦所以今天趕快交作業的程度。

然後還不懂的東西是 gzip，看起來是要在 Apache 裡面做設定才可以上傳 gzip 檔案讓伺服器解壓縮？還是說不需要上傳 gzip 檔案，它會自動幫我們壓縮 + 解壓縮？
這個東西好像不能在靜態頁面中看到結果，要透過伺服器才可以

另外，我是做完優化後才看 google 關於優化的課程，課程內容很淺顯易懂，不過有些東西只有點到，我是一邊看影片，一邊去搜尋更多的線上資源來確認我理解了，當然更大的一部份是我看不懂他的中文到底在寫什麼鬼 XDDD，比如這句 google 版中文說明：
> 禁止轉譯的 CSS：在預設情況下，CSS 會被視為禁止轉譯的資源，只要 CSSOM 還未建構完成，即使內容已經過處理，瀏覽器也不會進行轉譯。

禁止轉譯的 CSS ????
是指這個 CSS 不能被轉譯嗎？為什麼在 HTML 裡面的 CSS 預設是靜止轉譯的資源？？？轉譯是什麼？？？

後來經過一翻敲鑼打鼓(?)，我終於明白了，他是在說
> 瀏覽器還沒把 CSS 看完是不會顯示畫面給你看的！他要先看完 CSS 你才看得到網頁！

所以禁止轉譯是什麼？

我自己猜了一下有可能是指
> CSS(主詞)  禁止(動詞)  (HTML(受詞))  轉譯

> 禁止 (HTML) 轉譯的 CSS：在預設情況下，CSS 會被視為禁止 (HTML) 轉譯的資源，只要 CSSOM 還未建構完成，即使 (HTML) 內容已經過處理，瀏覽器也不會 ( 對 HTML) 進行轉譯 (渲染)。

官方應該是想要表達這個意思...(汗)

#### 關於 defer & async 的問題

我的理解：

* defer：不會干擾網頁的渲染，並行下載JS，等到 DOM 解析完畢後按照文件順序運行。
* async：不會干擾網頁的渲染，完全獨立，下載完直接運行，不管現在網頁 loading 進度到哪裡了。

我的問題：async 有可能會在 HTML 資源未解析完成的狀況下就載入完畢，這時候若程式執行起來可能會失敗？

於是實作一個程式碼實驗：

##### Q1

block.js 程式碼如下：
```javascript
const p = document.querySelector('p').innerHTML;
console.log('block', p);
```

執行此 html：
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script type="text/javascript" src="block.js"></script>
</head>
<body>
  <div>div</div>
  <p>p</p>
</body>
</html>
```

結果會 `失敗` ，這個我可以理解，因為還沒有進入 body，所以 p 在 JS 眼裡是不存在的，所以 console 結果會失敗

##### Q2

async.js 程式碼如下：
```javascript
const p = document.querySelector('p').innerHTML;
console.log('async', p);
```

執行此 html：

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script async type="text/javascript" src="async.js"></script>
</head>
<body>
  <div>div</div>
  <p>p</p>
</body>
</html>
```

我預期的結果是失敗
結果 console 出來 `async p` ，但是 async 不是一下載完畢就會執行了嗎？是因為 html 的解析速度比 javascript 解析加執行快多了，所以這邊的程式不會出錯嗎？

##### Q3

後來我再將 html 加入一行普通的 script 程式碼，並將 async script 放在 script 前面：

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
  <div>div</div>
  <p>p</p>
  <script async type="text/javascript" src="async.js"></script>
  <script type="text/javascript" src="block.js"></script>
</body>
</html>
```
結果 console 出來 `async p` 還是在 `block p` 的後面才出來，async 的特性前面已經學到，獨立於解析 html 之外，會自己下載，下載完了就會自己執行
那為什麼他跑的還是比 block 還要慢呢？

這邊的測試結論是不管將 async script 放在哪裡，他都在 html 被渲染完成之後才會執行，並跑得比沒有加 async 的 script 還要慢。

[這個網頁](https://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html) 的圖解要怎麼解釋呢？