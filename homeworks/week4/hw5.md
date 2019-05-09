## 請以自己的話解釋 API 是什麼

API 是應用程式介面，介面是一種格式，就像學生想提交獎學金申請，需要先拿一份申請書回來按照格式填寫，並交給行政人員，學校會根據你的資料審核有沒有符合拿獎學金的資格，然後由行政人員回覆結果給你。
學生透過行政人員和學校交換資料，網路則透過 API 來交換資料。

## 請找出三個課程沒教的 HTTP status code 並簡單介紹

* 202 Accepted：伺服器已接受請求，但尚未處理。請求最後也不一定會被執行。
* 403 Forbidden：沒有權限訪問此站，伺服器收到請求但拒絕提供服務。就是不准你看這個網頁的意思。
* 502 Bad Gateway：伺服器連接錯誤，可能是暫時的，可以晚點再來看看。



## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

Base URL: https://all-of-restaurant-in-the-world.com

### Requests

|  說明         | Method   |  path          |  參數       |   範例          |
|---------------|----------|----------------|-------------|----------------|
|回傳所有餐廳資料| GET      | /restaurant     | none       |                |
|回傳單一餐廳資料| GET      | /restaurant/:id | none       | /restaurant/10 |
|刪除餐廳       | DELETE   | /restaurant/:id | none        |               |
|新增餐廳       | POST     | /restaurant     | restaurant_name:餐廳名;boss_name:老闆名;country:國家名 |  |
|更改餐廳       | PATCH    | /restaurant/:id | restaurant_name:餐廳名;boss_name:老闆名;country:國家名 |  |


### Expected Results

```json
{
  "data": [
      {
        "id": "28623425344",
        "restaurant_name": "Yammy!",
        "boss_name": "Amy",
        "country": "French",
      },
      {
        "id": "12345421544",
        "restaurant_name": "GoGoEating",
        "boss_name": "Joy",
        "country": "America",
      },
      //...
    ]
}
```