<?php

  // 資料庫
  require_once('./conn.php');

  $sql = "DELETE FROM shuanshuan030913_comments WHERE id='$_GET[id]'";

  $result = $conn->query($sql);

  if ($result) {
    echo"<script>alert('留言刪除成功！');</script>";
    echo '<script>window.location.href="./index.php";</script>';
  } else {
    echo "fail " . $conn->error;
  }
?>