<?php

  // 資料庫
  require_once("./conn.php");

  // 設定傳入資料變數

  $username = $_POST["username"];
  $password = $_POST["password"];

  if (empty($username) || empty($password)) {
    die("所有選項接為必填！");
  }

  $sql = "SELECT * from shuanshuan030913_users WHERE `username`='$username' AND `password`='$password'";

  $result = $conn->query($sql);

  if ($result) {

    // 如果登入成功
    if ($result->num_rows > 0) {
      while($row = $result->fetch_assoc()) {
        // var_dump($row);
        setcookie("member_id", $row['id'], time()+3600*24);
      }
    } else {
      setcookie("member_id", "", time()+3600*24);
    }
    header("Location: ./index.php");

  } else {
    echo "fail " . $conn->error;
  }
?>