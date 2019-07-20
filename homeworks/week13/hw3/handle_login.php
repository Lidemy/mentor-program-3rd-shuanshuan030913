<?php

  // 資料庫
  require_once("./conn.php");

  // 設定傳入資料變數

  $username = $_POST["username"];
  $password = $_POST["password"];

  if (empty($username) || empty($password)) {
    echo "<script>alert('所有選項接為必填！');</script>";
    echo "<script>window.location.href='./index.php';</script>";
  } else {

    $stmt = $conn->prepare("SELECT * from shuanshuan030913_users WHERE username=?");
    $stmt->bind_param("s", $username);
    $stmt->execute();

    $result = $stmt->get_result();

    if ($result->num_rows > 0) {

      while($row = $result->fetch_assoc()) {

        if (password_verify($password, $row["password"])) {

          session_start();
          $_SESSION['nickname'] = $row["nickname"];

          echo "<script>alert('成功登入！歡迎回來！');</script>";
          echo "<script>window.location.href='./index.php';</script>";

        } else {
          echo "<script>alert('密碼錯誤！');</script>";
          echo "<script>window.location.href='./index.php';</script>";
        }
      }
    } else {
      echo "<script>alert('無此帳號！');</script>";
      echo "<script>window.location.href='./index.php';</script>";
    }
    $conn->close();
  }

?>