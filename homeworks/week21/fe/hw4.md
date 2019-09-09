## 為什麼我們需要 React？可以不用嗎？

當然可以不用，只是當專案越來越大的時候，我們有工具可以輔助我們更有效率的完成一樣的事，React、 Angular、 Vue 就是這樣誕生的。

## React 的思考模式跟以前的思考模式有什麼不一樣？

以前我們把事件放在 DOM 上思考，需要就 append，刪掉就操作刪除，事件綁定在 DOM 上

React 把畫面和資料分開，所有的畫面都是由資料產生的，所以我們新增就新增一筆資料，然後畫面會因為資料有幾筆，就產生幾筆畫面，不是去操作畫面，是操作資料，畫面產生是源自於和資料的交互作用，所以比較不會有資料和畫面不一致的 bug 產生

## state 跟 props 的差別在哪裡？

* state 是元件本身的狀態
* props 是從上層傳下來的狀態

所以我們不能直接修改 props，要一層一層的往上請求 state 去做 setState 的動作

## 請列出 React 的 lifecycle 以及其代表的意義

* constructor -- 元件被建立
constructor 出現時，代表元件已被建立完畢

* shouldComponentUpdate -- 改變 state 後， render 以前
在我們更新狀態之前，通常用在檢查，並且不宜作太複雜的判斷，過度消耗資源，也可以用在優化：判斷若沒有改變就不要 render 某部分元件

* componentDidUpdate -- 更新 state 後，render 之後
更新狀態之後，通常用在收集數據（例子：表單紀錄使用者輸入的內容？這個部分尚未實作）

* componentDidMount -- render 之後
畫面渲染完畢後，我們可以利用他做些事情，通常是初始化相關的動作
(在 counstructor 階段取不到元素的，DidMount 可以保證一定能拿得到這個元素)

* componentWillUnmount -- 在 Unmount 以前
在元件被銷毀之前的動作，通常會和 componentDidMount 成對出現，確定該清空的東西都清理完畢
