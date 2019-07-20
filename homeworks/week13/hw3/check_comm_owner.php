<?php

  require_once('./conn.php');

  $membercheck_stmt = $conn->prepare("SELECT * from shuanshuan030913_comments WHERE `id`=? ");
  $membercheck_stmt->bind_param("s", $_POST['id']);
  $membercheck_stmt->execute();
  $membercheck_result = $membercheck_stmt->get_result();
  $membercheck_row = $membercheck_result->fetch_assoc();
?>