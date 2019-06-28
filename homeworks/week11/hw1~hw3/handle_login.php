<?php

  // 資料庫
  require_once("./conn.php");

  // 設定傳入資料變數

  $username = $_POST["username"];
  $password = $_POST["password"];

  if (empty($username) || empty($password)) {
    die("所有選項接為必填！");
  }


  $sql = "SELECT * from shuanshuan030913_users WHERE `username`='$username'";
  $result = $conn->query($sql);

  if ($result) {

    if ($result->num_rows > 0) {

      while($row = $result->fetch_assoc()) {

        if (password_verify($password, $row["password"])) {

          session_start();

          $_SESSION['username'] = $row["username"];

          $session_id = session_id();
          $session_username = $_SESSION['username'];

          $session_sql = "INSERT INTO shuanshuan030913_users_certificate(session_id, username) VALUES('$session_id', '$session_username')";
          $session_result = $conn->query($session_sql);
        } else {
          echo "false";
          // var_dump($row);
        }
      }
    }

    header("Location: ./index.php");

  } else {
    echo "fail " . $conn->error;
  }
?>