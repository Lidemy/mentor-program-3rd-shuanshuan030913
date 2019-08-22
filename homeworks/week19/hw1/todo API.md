
base URL：http://uccme.tw/todo/api

| 說明 | Method | path | 參數 | 範例 | 備註 |
|---|---|---|---|---|---|
| 獲取所有 todo | GET | /get_all_lists.php | x | - | - |
| 獲取單一 todo | GET | /get_list.php | \_limit | get_list.php?_limit=1 | 排序從新到舊 |
| 新增 todo | POST | /handle_add.php | content | - | - |
| 刪除 todo | POST | /handle_delete.php | id | - | - |
| 修改 todo | POST | /handle_update.php | content, status, id | - | - |

每個 todo 內都包含
1. status：狀態
   - 未完成 status = 0
   - 已完成 status = 1
2. content：內容
