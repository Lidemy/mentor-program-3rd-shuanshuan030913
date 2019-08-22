<?php

  // 資料庫
  require_once('./conn.php');

  if (empty($_POST['content'])) {
    die('沒有輸入留言');
  }

  $content = htmlspecialchars($_POST['content'], ENT_QUOTES, 'utf-8');

  $stmt = $conn->prepare('INSERT INTO list_content (status, content) VALUES (?, ?)');
  $stmt->bind_param('is', $_POST['status'], $content);
  $stmt->execute();
  $result = 'true';


  echo json_encode($result);
?>