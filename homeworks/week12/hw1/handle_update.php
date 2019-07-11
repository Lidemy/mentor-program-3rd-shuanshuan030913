<?php

  // 資料庫
  require_once('./conn.php');

  require_once("./check_login.php");
  require_once("./check_comm_owner.php");

  if ($is_login && $nickname === $membercheck_row['name']) {
    $stmt = $conn->prepare("UPDATE shuanshuan030913_comments SET context = ? WHERE `id` =?");
    $stmt->bind_param("ss", $_POST["context"], $_GET["id"]);
    $stmt->execute();

    echo"<script>alert('留言修改成功！');</script>";
    echo '<script>window.location.href="./index.php";</script>';
  } else {
    echo "非會員本人！無法操作！";
  }
?>