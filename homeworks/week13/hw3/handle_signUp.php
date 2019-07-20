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

  if ($stmt->execute()) {

    session_start();
    $_SESSION['nickname'] = $nickname;

    echo "<script>alert('新增成功！');</script>";
    echo "<script>window.location.href='./index.php';</script>";
  } else {
    echo "<script>alert('新增失敗！此帳號或密碼可能已被使用 !');</script>";
    echo "<script>window.location.href='./index.php';</script>";
  }

?>