<?php

  // 資料庫
  require_once("./conn.php");

  // 設定傳入資料變數

  $username = $_POST['username'];
  $password = $_POST['password'];
  $nickname = $_POST['nickname'];

  $hash = password_hash($password, PASSWORD_DEFAULT);

  if (empty($username) || empty($password) || empty($nickname)) {
    die('所有選項接為必填！');
  }

  $stmt = $conn->prepare("INSERT INTO shuanshuan030913_users(username, password, nickname) VALUES(?, ?, ?)");
  $stmt->bind_param("sss", $username, $hash, $nickname);
  $stmt->execute();

  echo"<script>alert('新增成功！請登入會員！');</script>";
  echo '<script>window.location.href="./index.php";</script>';

?>