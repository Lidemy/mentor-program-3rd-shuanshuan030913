<?php

  // 資料庫
  require_once('./conn.php');

  // 設定暱稱
  $member_id = $_COOKIE['PHPSESSID'];

  $member_stmt = $conn->prepare("SELECT * from shuanshuan030913_users LEFT JOIN shuanshuan030913_users_certificate ON shuanshuan030913_users.username = shuanshuan030913_users_certificate.username WHERE `session_id`=?");
  $member_stmt->bind_param("s", $member_id);
  $member_stmt->execute();

  $member_result = $member_stmt->get_result();

  if ($member_result->num_rows > 0) {
    while($row = $member_result->fetch_assoc()) {
      $name = $row['nickname'];
    }
  }

  // 設定傳入資料變數

  $parents_id = $_POST['parents_id'];
  $context = $_POST['context'];

  if (empty($context)) {
    die('沒有輸入留言');
  }

  $stmt = $conn->prepare("INSERT INTO shuanshuan030913_comments (name, context, parents_id) VALUES (?, ?, ?)");
  $stmt->bind_param("sss", $name, $context, $parents_id);
  $stmt->execute();

  header('Location: ./index.php');
?>