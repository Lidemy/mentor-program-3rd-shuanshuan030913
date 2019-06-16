<?php

  // 資料庫
  require_once("./conn.php");

  // 設定傳入資料變數

  $username = $_POST['username'];
  $password = $_POST['password'];
  $nickname = $_POST['nickname'];

  if (empty($username) || empty($password) || empty($nickname)) {
    die('所有選項接為必填！');
  }

  $sql = "INSERT INTO shuanshuan030913_users(username, password, nickname) VALUES('$username', '$password', '$nickname')";

  $result = $conn->query($sql);

  if ($result) {
    echo "新增成功!";
  } else {
    echo "fail " . $conn->error;
  }
?>