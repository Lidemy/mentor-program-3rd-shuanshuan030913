<?php
  // 資料庫
  require_once('./conn.php');

  session_start();
  $_SESSION = array();

  $session_id = $_COOKIE['PHPSESSID'];

  $stmt = $conn->prepare("DELETE FROM shuanshuan030913_users_certificate WHERE session_id=?");
  $stmt->bind_param("s", $session_id);
  $stmt->execute();

  if (isset($_COOKIE['PHPSESSID'])) {
  setcookie("PHPSESSID", '', time()-42000, '/');
  }
  session_destroy();

  echo"<script>alert('登出成功！');</script>";
  echo '<script>window.location.href="./index.php";</script>';

?>