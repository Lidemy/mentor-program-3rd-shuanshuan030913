<?php

  // 資料庫
  require_once("./conn.php");

  // 設定傳入資料變數

  $username = $_POST["username"];
  $password = $_POST["password"];

  if (empty($username) || empty($password)) {
    die("所有選項接為必填！");
  }

  $stmt = $conn->prepare("SELECT * from shuanshuan030913_users WHERE username=?");
  $stmt->bind_param("s", $username);
  $stmt->execute();

  $result = $stmt->get_result();

  if ($result->num_rows > 0) {

    while($row = $result->fetch_assoc()) {

      if (password_verify($password, $row["password"])) {

        session_start();

        $_SESSION['username'] = $row["username"];

        $session_id = session_id();
        $session_username = $_SESSION['username'];

        $session_stmt = $conn->prepare("INSERT INTO shuanshuan030913_users_certificate(session_id, username) VALUES(?, ?)");
        $session_stmt->bind_param("ss", $session_id, $session_username);
        $session_stmt->execute();
        $session_result = $session_stmt->get_result();

      } else {
        echo "false";
      }
    }
    $conn->close();
  }

  header("Location: ./index.php");
?>