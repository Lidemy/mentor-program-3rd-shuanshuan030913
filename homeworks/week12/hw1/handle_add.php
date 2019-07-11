<?php

  // 資料庫
  require_once('./conn.php');

  // $nickname
  require_once("./check_login.php");

  if (empty($_POST['context'])) {
    die('沒有輸入留言');
  }

  $stmt = $conn->prepare("INSERT INTO shuanshuan030913_comments (name, context, parents_id) VALUES (?, ?, ?)");
  $stmt->bind_param("sss", $nickname, $_POST['context'], $_POST['parents_id']);
  $stmt->execute();

  header('Location: ./index.php');
?>