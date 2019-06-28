<?php
  // 資料庫
  require_once('./conn.php');

  session_start();
  $_SESSION = array();

  $session_id = $_COOKIE['PHPSESSID'];

  $sql = "DELETE FROM shuanshuan030913_users_certificate WHERE session_id = '$session_id'";


  if ($conn->query($sql)) {

    if (isset($_COOKIE['PHPSESSID'])) {
    setcookie("PHPSESSID", '', time()-42000, '/');
    }
    session_destroy();

    echo"<script>alert('登出成功！');</script>";
    echo '<script>window.location.href="./index.php";</script>';

  } else {
    echo "Error deleting record: " . $conn->error;
  }

?>