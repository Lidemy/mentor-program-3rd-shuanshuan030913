## 什麼是 DOM？

Document Object Model 文件物件模型

類似於把 html 裡面的元素轉換成 javascript 的 object 去指定，然後對這個元素下指令

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？

先捕獲在冒泡，會從最外層一層一層的傳遞到最裡面，然後在一層一層的傳到最外面。
捕獲：向內傳遞
冒泡：向外傳遞

## 什麼是 event delegation，為什麼我們需要它？

事件代理，透過父節點來處理子節點的事件，就叫做事件代理。
因為有捕獲與冒泡的機制，事件代理才能夠成立。

事件代理可以應用在一些事情上，讓我們寫程式更加方便有效，例如：大量子元素需要事件監聽時，我們可以監聽他們共同的父元素，就可以監測到子元素的觸發，一次監聽，全部滿足（？


## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？

`event.preventDefault()` 阻止預設事件

```javascript
const a = document.querySelector('form');
a.addEventListener('submit', (event) => {
	event.preventDefault();
	// 可以阻止 form 表單 submit
});
```

`event.stopPropagation()` 用在事件代理，讓事件不再往下傳遞

```javascript
const a = document.querySelector('form');
a.addEventListener('submit', (event) => {
	event.stopPropagation();
	// 事件只傳遞到 form 表單那層，所以按下裡面的 <input type="submit"> 會無作用
});
```
