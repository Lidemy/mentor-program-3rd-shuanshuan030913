<?php

  // 資料庫
  require_once('./conn.php');


  $id = $_GET["id"];
  $context = $_POST["context"];

  $stmt = $conn->prepare("UPDATE shuanshuan030913_comments SET context = '$context' WHERE `id` =?");
  $stmt->bind_param("s", $id);
  $stmt->execute();

  echo"<script>alert('留言修改成功！');</script>";
  echo '<script>window.location.href="./index.php";</script>';

?>