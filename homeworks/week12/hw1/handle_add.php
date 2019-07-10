<?php

  // 資料庫
  require_once('./conn.php');

  // 設定暱稱
  $member_id = $_COOKIE['PHPSESSID'];
  $member_sql = "SELECT * from shuanshuan030913_users LEFT JOIN shuanshuan030913_users_certificate ON shuanshuan030913_users.username = shuanshuan030913_users_certificate.username WHERE `session_id`='$member_id'";
  $member_result = $conn->query($member_sql);

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

  $sql = "INSERT INTO shuanshuan030913_comments(name, context, parents_id) VALUES('$name', '$context', '$parents_id')";

  $result = $conn->query($sql);

  if ($result) {
    header('Location: ./index.php');
  } else {
    echo "fail " . $conn->error;
  }
?>