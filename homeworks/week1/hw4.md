## 跟你朋友介紹 Git

### Git 是什麼

Git 就是一個用來幫你做版本控制的程式，可以保存檔案的每個版本

#### 使用 Git 的好處

	1. 檔案版本過多的時候，要回去找某個時候的檔案，Git 都幫你整理得清楚明白，可以很輕易的召回那時候的版本，不用一直複製檔案重新命名
	2. 和多人協作項目時，Git 能夠為每一次的更新做紀錄
	3. 不同人在不同檔案上可以同時進行修改，Git 會幫你整合成最新的版本，你再下載最新的變更到自己的電腦裡，就可以隨時保證自己的檔案和其他人的檔案是同步的
	4. Git 分支的功能，可以一邊為專案做新功能，一邊去處理程式 bug 問題，bug 分支裡面沒有新功能，可以很安心回復給提出 bug 的客戶，等到新功能分支製作完畢也測試完畢沒有問題，就可以把兩條支線合併在一起，得到既修復舊 bug，也加上新功能的全新版本

自己手動做版本控制也可以，但是有程式幫你管理檔案會更加方便！


#### Git 怎麼用


* 如果你的電腦是 Windows：推薦下載 Cmder（full 版本裡面有包含 Git 功能）

	可以輸入 `git --version` 並且按 enter，如果有印出版本號，就代表成功了

* 如果你的電腦是 MAC：直接搜尋 Terminal，在裡面輸入 `git --version` 並且按 enter，如果有印出版本號，就代表成功了

	如果你的版本是 10.9 以上，會自動跳出指引帶你去安裝，或是參考 Git 官網的教學直接下載安裝檔。


#### Git 常用的指令：

* `git init`　初始化：系統就知道這個檔案夾下面要開始做版本控制（出現隱藏檔案 .git ）
	* .gitignore 要忽略的檔案：可以把要忽略的檔案名稱輸入進去，例如使用者相關的檔案或系統自動建立的檔案
* `rm -r .git` 把隱藏檔案 .git 刪掉的話，系統就不會做版本控制（解除版本控制的方式）
* `git status` 查看當前版本控制的狀態
* `git add + 要加入版本控制的檔案名稱` 指定檔案加入版本控制（檔案修改後就不在版本控制了，要加入以後才能 commit 建立新版本）

	修改檔案後，使用 git 查看狀態會出現兩種區塊
		* untracked: 未加入版本控制
		* staged: 加入版本控制
* `git rm --cached + 要移除版本控制的檔案名稱` 就可以把 staged 狀態的檔案移到 untracked ，就不再被版本控制
* `git add .` 加入全部檔案

#### commit 和 log

* `git commit` 新建版本，會進入編輯器，可以輸入較多的 commit message 
* `git commit -m "commit message （敘述本次修改說明）"` 新建版本

	* 如果出現要你設定帳號跟姓名的畫面：
		git config --global user.name "your name"
		git config --global user.email "your email"

	* 如果作業系統是 Windows，請注意後面的字串一定要用雙引號，用單引號的話會出錯

* `git commit -am "commit message（敘述本次修改說明）"` 把所有修改過的檔案加入新版本（不包含新增的檔案）
* `git log` 可查看歷史紀錄
* `git log --oneline` 可查看比較簡短的歷史紀錄
* `git commit --amend `修改 commit 敘述（打錯字的時候還可以改回來）

#### 回到上一個 commit 紀錄（已經 commit，但是不想要這個 commit）

	* `git reset head"^"` 回到上一個 commit 紀錄（預設 = mixed）
	* `git reset head"^" --mixed` 回到上一個 commit 紀錄（預設 = mixed，移除staged，內容是新版的）
	* `git reset head"^" --soft` 回到上一個 commit 紀錄（僅移除 commit 變成新版未 commit，內容是新版的）
	* `git reset head"^" --hard` 回到上一個 commit紀錄（內容及狀態皆是上一版本，中間變更完全移除）

#### 回到上一個 commit 紀錄（還沒 commit，不想要改過的檔案了）
	* `git checkout -- fileName` 回復檔案到上一個commit狀態
	* `git checkout -- ..` 回復全部檔案到上一個commit狀態

* `git checkout + 版本號` 切換版本號
* `git checkout master` 切換回最新的狀態
* `git diff` 在 commit 之前可以查看和上一個版本的差別

#### branch 的世界

* `git branch -v` 查看有哪些分支
* `git branch + 新分支名稱` 創造分支
* `git branch -m 新的分支名稱` 修改分支名稱
* `git branch -d 要刪除的分支名稱` 刪除分支
* `git checkout + 要進入的分支名稱` 切換分支
* `git merge + 你站在的分支名稱` 合併分支（你站在哪條支線上，就會把其他分支合併到你站在的支線上）

發生衝突的時候（兩條 branch 修改到同一個檔案），合併時會出錯
解決方法：打開檔案手動決定應該儲存成什麼樣子

#### 用 git 把檔案推到全世界 -- GitHub

* `git remote add 遠端名稱 in GitHub 網址` 建立遠端名稱
* `git push (-u) 遠端名稱 遠端的分支名稱` 把本機的 分支 推到 GitHub 上面去
* `git pull 遠端名稱 遠端的分支名稱` 把 GitHub 上面的分支拉到本機上
* `git clone website` 把別人的專案複製一份到我電腦裡
* `git checkout + 遠端分支名稱` 下載遠端的分支


#### hook：發生某事的時候通知我 

1.在 hooks資料夾裡面打開 sample 裡面有註解使用說明
2.可以在檔案裡面做判斷


### 完成菜哥的任務

1. 打開 Cmder 切換到 放笑話的資料夾
2. 輸入 `git init` 初始化：叫電腦開始為這個資料夾做版本控制
3. 輸入 `git add + 笑話文字檔名` 把笑話文字檔加入版本控制
4. 輸入 `git commit` 建立版本（這時是笑話的第一個版本）
5. 當要保存新版本的時候，輸入 `git commit -am "commit message"` commit message，請換成你的本次修改說明
6. 如果想要查看笑話的歷史紀錄，輸入 `git log`，上面會顯示版本號、commit 人資料、commit 時間、commit message 等資訊
6. 如果之後想要找特定版本的笑話，輸入 `git checkout + 版本號`，資料夾內的笑話文字檔就會回復到那個時期的模樣