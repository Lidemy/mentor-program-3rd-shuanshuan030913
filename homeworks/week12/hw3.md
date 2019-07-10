## 請說明 SQL Injection 的攻擊原理以及防範方法

> 攻擊者能夠注入（Inject）一些東西，執行他想要的結果

在登入的時候於帳號輸入 `' or 1=1 --` ，SQL語法會變成 `select * from users where username='' or 1=1 -- '' and password=''` ，帳號永遠成立且註解掉密碼的判斷，則不需要知道帳號及密碼就可以登入網站

### 防範方法：使用 prepare statement

```
$stmt = $conn->prepare("SELECT * from table_A WHERE username=? and $pwd=?");
$stmt->bind_param("ss", $username, $pwd);
$stmt->execute();
```
把帳號及密碼另外提取出來成為字串，就可以防範本應該輸入的內容成為程式碼之一。

## 請說明 XSS 的攻擊原理以及防範方法

> 在別人的網頁上執行 JavaScript

以留言板為例，再輸入文字內容的區塊寫上程式碼，便可以對這個網站做任何事

例如輸入 `<script>window.location.href='惡意網址'</script>`，就可以讓每個進入這個留言版的使用者都被強制跳轉到惡意網址上


### 防範方法：使用 escape　跳脫字元

```
echo htmlspecialchars($str, ENT_QUOTES, 'utf-8');
```
讓特殊字元維持字串的形式，就不會被瀏覽器讀取成程式碼去運作。


## 請說明 CSRF 的攻擊原理以及防範方法

> Cross Site Request Forgery 跨站請求偽造

在不同網域的網站上去請求目標網站的 request ，並因為 session 已存在在目標網站，所以 request 被驗證成功，執行惡意程式碼。

例如在釣魚網站上面有個連結是導到目標網站上去刪除資料，雖然使用者位在釣魚網站，但 request 被傳送到目標網站上，又使用者因為沒有登出目標網站， request 檢查身分確認 session 是本人的沒錯，就刪除使用者的資料了。

使用者並沒有點擊刪除的選項，卻透過別的網域的點擊，刪除目標網站的資料，這即是 CSRF 跨站請求偽造。

### 防範方法

1. CSRF token

只要確保有些資訊「只有使用者知道」，就可以防範來自外部的請求
例如在表單內增加一個隱藏 input ，並儲存 server 隨機產生的 token 在 session 中，外部 request 無法得知這個 token 的內容，則 request 無法輕易被偽造。
前提是 server 並未開放跨網域的請求。

2. Double Submit Cookie

和第一點不同的是，token 不存在 sever 端，儲存在 cookie 上，我們只要區分出這個 request 是不是從同樣的網域來，就可以判斷是不是惡意攻擊。

因為攻擊者沒辦法竄改或提取目標網站的 cookie，所以 request 就無法成功偽造。

3. browser 本身的防禦

Chrome 51 版的時候正式加入了這個功能：SameSite cookie，只要在 Set-Cookie 的後面加上 `SameSite` 即可
缺點是只有 chrome 瀏覽器有支援。