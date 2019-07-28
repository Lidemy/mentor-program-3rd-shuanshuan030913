# 部屬網站

## 上傳檔案

1. git 整個專案
   * `cd var/www/html`
   * `sudo git clone 網址` 指令前面需要加上 sudo，否則會提示權限不夠，並在第一次 clone 後，下次要使用 pull 指令更新專案

2. 或使用 FileZilla ，需先設定 SSH

## 關於權限

* `-rw------- (600)`  只有擁有者有讀寫權限。
* `-rw-r--r-- (644)`  只有擁有者有讀寫權限；而 group 用戶和其他用戶只有讀權限。
* `-rwx------ (700)`  只有擁有者有讀、寫、執行權限。
* `-rwxr-xr-x (755)`  擁有者有讀、寫、執行權限；而 group 用戶和其他用戶只有讀、執行權限。
* `-rwx--x--x (711)`  擁有者有讀、寫、執行權限；而 group 用戶和其他用戶只有執行權限。
* `-rw-rw-rw- (666)`  所有用戶都有文件讀、寫權限。
* `-rwxrwxrwx (777)`  所有用戶都有讀、寫、執行權限。

輸入指令範例：`sudo chmod 755 -R /var/www`
查看權限：進入該資料夾底下 `ls -l`

[參考來源](https://blog.csdn.net/u013197629/article/details/73608613)

## Apache

1. 重啟 apache `sudo /etc/init.d/apache2 restart` or `sudo service apache2 restart`

## phpmyadmin 疑難排解

若手動刪除了不該刪的內建資料庫，則有機率出現以下症狀

### 刪除 phpmyadmin 重新安裝

1. `sudo apt-get remove phpmyadmin`
2. `sudo apt-get install phpmyadmin`
3. 重啟 apache

### 出現 使用設定檔案中定義的控制使用者連線失敗。

更改 `etc/phpmyadmin` 裡的 `config-db.php` 檔案

```php
<?php
$dbuser='sample';
$dbpass='sample';//修改成剛剛創的帳號密碼 專門控制 phpmyadmin 資料庫
$basepath='';
$dbname='phpmyadmin';
$dbserver='localhost';
$dbport='';
$dbtype='mysql';
?>
```

## MySQL 疑難排解

### sudo mysql_secure_installation

* [mysql_secure_installation 安全配置教學](https://vitux.com/how-to-install-and-configure-mysql-in-ubuntu-18-04-lts/)

### 登入：警告不要直接輸入密碼

```
[Warning] Using a password on the command line interface can be insecure.
```

輸入：`mysql -u root -p`，下一步提示輸入密碼

### 離開 MySQL

輸入：`exit` 按下 enter

### 砍掉重裝清設定

若手動刪除了不該刪的內建資料庫，則有機率需要砍掉重練

1. 先移除 mysql
   * `sudo apt-get purge --auto-remove mysql-server php7.0-mysql php-pear`
   * `sudo apt-get autoremove`
   * `sudo apt-get autoclean`
2. 把設定檔刪掉 `sudo rm -rf /etc/mysql rm -rf /var/lib/mysql`
3. 砍掉 mysql 使用者 `sudo killall -9 mysql (或 killall -9 mysqld) userdel mysql`
4. 重新安裝 mysql `sudo apt-get install mysql-server php7.0-mysql php-pear`

* 參考：[Ubuntu 如何完整移除 MySQL](https://noob.tw/remove-mysql-completely/)

## 連線問題：首先檢查數據連線

> ping 檢查網路是否 OK
> telnet 檢查 IP 是否開放指定 port

1. 檢查網路 `ping -c 10 192.168.0.21` (-c = count 後面接 ping 的次數)
2. 檢查 port `telnet 192.168.0.21 80`
3. 檢查防火牆是否阻擋

## 防火牆設置

1. 啟用防火牆
   * `sudo ufw enable`
   * `sudo ufw default deny` (關閉所有外部對本機的訪問，但本機訪問外部正常)
2. 允許 SSH 連接
   * `sudo ufw allow ssh` or `sudo ufw allow 22`
3. 允許其他連接
   * (允許 http 連接)`sudo ufw allow http` or `sudo ufw allow 80`
   * (允許 https 連接)`sudo ufw allow https` or `sudo ufw allow 443`
   * (允許 mysql 連接)`sudo ufw allow 3306`
   * (允許某 IP 連接)`sudo ufw allow from 15.15.15.51`
4. 拒絕特定連接
   * (拒絕 http 連接) `sudo ufw deny http`
   * (拒絕某 IP 連接) `sudo ufw deny from 15.15.15.51`
5. 查看防火牆配置
   * `sudo ufw status` or `sudo ufw status numbered`(照號碼排列)
6. 禁用防火牆
   * `sudo ufw disable`
7. 重設防火牆
   * `sudo ufw reset`

* 參考：[如何在 Ubuntu 16.04 上使用 UFW 设置防火墙](https://www.howtoing.com/how-to-set-up-a-firewall-with-ufw-on-ubuntu-16-04)

