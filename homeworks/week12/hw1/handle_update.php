<?php

  // 資料庫
  require_once('./conn.php');


  $id = $_GET["id"];
  $context = $_POST["context"];

  $sql = "UPDATE shuanshuan030913_comments SET context = '$context' WHERE `id` = $id ";

  $result = $conn->query($sql);

  if ($result) {
    echo"<script>alert('留言修改成功！');</script>";
    echo '<script>window.location.href="./index.php";</script>';
  } else {
    echo "fail " . $conn->error;
  }
?>