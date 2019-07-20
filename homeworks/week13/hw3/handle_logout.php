<?php
  // 資料庫
  require_once('./conn.php');

  session_start();
  setcookie("PHPSESSID", '', time()-3600*24, '/');

  unset($_SESSION["nickname"]);

  echo"<script>alert('登出成功！');</script>";
  echo '<script>window.location.href="./index.php";</script>';

?>