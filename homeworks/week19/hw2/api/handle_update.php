<?php

  // 資料庫
  require_once('./conn.php');

  $content = htmlspecialchars($_POST['content'], ENT_QUOTES, 'utf-8');

  $stmt = $conn->prepare("UPDATE list_content SET status = ?, content = ? WHERE `id` =?");
  $stmt->bind_param("sss", $_POST["status"], $content, $_POST["id"]);
  $stmt->execute();
  $result = 'true';

  echo json_encode($result);
?>