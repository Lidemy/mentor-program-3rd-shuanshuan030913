## 交作業流程

#### 首次設定 github 專案

1. 點擊老師的邀請[連結](https://classroom.github.com/a/V4hZopA2)
2. 畫面會出現我的[連結](https://github.com/Lidemy/mentor-program-3rd-shuanshuan030913)
3. 點擊右上角 * Clone or download * ，複製[連結](https://github.com/Lidemy/mentor-program-3rd-shuanshuan030913.git)
4.在 Cmder 裡面輸入 `git clone https://github.com/Lidemy/mentor-program-3rd-shuanshuan030913.git` 把作業專案複製一份到自己的電腦裡

#### 電腦安裝設置

1. 安裝 node.js
2. 安裝 `npm install`

之後每週寫作業就是直接改裡面的檔案交上來


#### 終於可以開始交作業囉

1.git branch weekN ( 交作業之前永遠要記得新增 branch )
2. git checkout weekN 切換到 branch weekN 再 commit

在 Cmder 裡面

3. git commit -am "描述這次變動內容" ( 建立新 commit )
4. git push origin week1 ( 意思是把這個 branch 推到 GitHub 上面 )
5. 在 GitHub 上面會出現 Your recently pushed branches: 點選 Compare & pull request
6. 標題可以自由打 ex: Week1 作業
7. 敘述可以打心得感想或是問題點
8. 點選 Creat pull request
9. 完成之後到第三期交作業的 [repo](https://github.com/Lidemy/homeworks-3rd)
10. 建立 New issue
11. 標題正確格式為 [Week1]，標題必須符合規範，否則機器人會自動關閉 issue
12. 敘述貼上作業網址 （例： https://github.com/Lidemy/mentor-program-3rd-shuanshuan030913/pull/1 ）
13. 後面可以寫任意心得等等
14. 點選 Submit new issue
15. 機器人會自動加上標籤，並 tag 同學們來看作業
16. 老師看過 OK 後，就會 Merge，並把 branch 刪除，回到交作業的 repo 把 issue 關閉

#### 回到 Cmder

17. git checkout master ( 切換到主要分支 )
18. git pull origin master ( 把版本更新至和 GitHub 同步 )
19. git branch -d week1 ( 把本機端的分支刪除 )
20. 完成本次作業繳交

#### 須知

作業導入 eslint ，如果程式碼不符合規範就無法推上 GitHub
如果老師認為還可以再修改，並 merge 作業的話，就再開一個 branch 交作業
