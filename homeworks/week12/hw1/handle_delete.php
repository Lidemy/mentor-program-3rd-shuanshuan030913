<?php

  // 資料庫
  require_once('./conn.php');

  $stmt = $conn->prepare("DELETE FROM shuanshuan030913_comments WHERE `id`=? or `parents_id`=?");
  $stmt->bind_param("ss", $_GET['id'], $_GET['id']);
  $stmt->execute();

  echo"<script>alert('留言刪除成功！');</script>";
  echo '<script>window.location.href="./index.php";</script>';
?>