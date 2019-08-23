<?php

  // 資料庫
  require_once('./conn.php');

  $stmt = $conn->prepare("DELETE FROM list_content WHERE `id`= ? ");
  $stmt->bind_param("i", $_POST['id']);
  $stmt->execute();
  $result = 'true';

  echo json_encode($result);
?>