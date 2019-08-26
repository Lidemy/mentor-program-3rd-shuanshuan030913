<?php

  // 資料庫
  require_once('./conn.php');

  $stmt = $conn->prepare("UPDATE list_content SET status = ?, content = ? WHERE `id` =?");
  $stmt->bind_param("sss", $_POST["status"], $_POST['content'], $_POST["id"]);
  $stmt->execute();
  $result = 'true';

  echo json_encode($result);
?>