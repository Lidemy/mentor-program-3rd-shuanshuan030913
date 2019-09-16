## React Router 背後的原理你猜是怎麼實作的？

在改變 URL 的時候不刷新頁面，並根據路徑決定要呈現哪個 compoment。

## SDK 與 API 的差別是什麼？

SDK = Software Development Kit，是軟體開發套件，中國翻成软件开发工具包
API = Application Programming Interface，是應用程式介面，中國翻成应用程序接口

從中國翻譯會比較好理解兩者的關係，可以把 SDK 想像成已經打包好的工具包，如果要使用這個工具包的內容，只要接上相對應的 API 接口就可以了。

所以，套件 = SDK，函式 = API，使用函式 (API) 把套件 (SDK) 和你的程式串聯在一起。


##### 參考資料：[SDK和API的区别？](https://www.zhihu.com/question/21691705)

## 在用 Ajax 的時候，預設是不會把 Cookie 帶上的，要怎麼樣才能把 Cookie 一起帶上？

前端要在 request 設定 `withCredentials = true`
後端要在 response 設定 `Access-Control-Allow-Credentials = true`，`"Access-Control-Allow-Origin: http://www.xxx.com"`