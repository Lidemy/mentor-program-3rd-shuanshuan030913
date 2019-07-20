<?php

  // 資料庫
  require_once('./conn.php');

  require_once("./check_login.php");
  require_once("./check_comm_owner.php");

  $context = htmlspecialchars($_POST['context'], ENT_QUOTES, 'utf-8');

  if ($is_login && $nickname === $membercheck_row['name']) {

    $stmt = $conn->prepare("UPDATE shuanshuan030913_comments SET context = ? WHERE `id` =?");
    $stmt->bind_param("ss", $context, $_POST["id"]);
    $stmt->execute();
    $result = 'true';

  } else {
    $result = 'false';
  }
  echo json_encode($result);
?>