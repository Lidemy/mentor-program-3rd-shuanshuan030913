## 請解釋後端與前端的差異。

1. 前端：看得見的部分

  使用者在瀏覽器看得見的部分，例如網站畫面

2. 後端：看不見的部分

  處理使用者看不見的程式，例如產品資料庫、點擊畫面後到資料庫裡撈資料，並顯示在前端

## 假設我今天去 Google 首頁搜尋框打上：JavaScrit 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。

1. 在搜尋框上面打上 JavaScript 並按下 Enter
2. Google 瀏覽器透過網路把 JavaScript 這串字傳給伺服器（ Request ）
3. 伺服器從資料庫裏面尋找有關 JavaScript 的結果
4. 之後伺服器把結果透過網路傳回到使用者的電腦（ Response ）
5. 讓結果顯示在使用者的網頁上

## 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用。

1. `exit` 關閉視窗
2. `ipconfig` 顯示網路介面的IP位址、網路遮罩及Gateway位址
3. `hostname` 查看主機名稱
4. `curl + 網址` 取得網頁內容，輸出至螢幕
5. `curl -o + 指定檔案名稱 + 網址` 取得網頁內容，輸出至指定檔案內（若檔案名稱不存在，則創建新檔案）


###### 參考資料

1. [command line 網路相關指令](http://swangs.pixnet.net/blog/post/19501057-%5Bnet%5D-command-line-%E7%B6%B2%E8%B7%AF%E7%9B%B8%E9%97%9C%E6%8C%87%E4%BB%A4 )

2. [命令行(command-line)簡介 | Django Girls' Tutorial 中文版教材](https://carolhsu.gitbooks.io/django-girls-tutorial-traditional-chiness/content/intro_to_command_line/README.html#)

3. [Linux 基本指令介紹](http://linux.vbird.org/linux_basic/redhat6.1/linux_06command.php) 

4. [curl 指令教學](https://blog.xuite.net/xiong2/blog/240158985-cURL+%E6%8C%87%E4%BB%A4%E6%95%99%E5%AD%B8+%28cURL+command+how-to%29)