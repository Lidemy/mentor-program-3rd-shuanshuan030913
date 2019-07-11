<?php

  require_once("./conn.php");

  $is_login = false;
  $member_id = '';
  $nickname = '';

  if(isset($_COOKIE["PHPSESSID"]) && !empty($_COOKIE["PHPSESSID"])) {
    $member_id = $_COOKIE["PHPSESSID"];

    $member_stmt = $conn->prepare("SELECT * from shuanshuan030913_users LEFT JOIN shuanshuan030913_users_certificate ON shuanshuan030913_users.username = shuanshuan030913_users_certificate.username WHERE `session_id` = ? ");
    $member_stmt->bind_param("s", $member_id);
    $member_stmt->execute();
    $member_result = $member_stmt->get_result();

    $member_row = $member_result->fetch_assoc();

    if ($member_row) {
      $is_login = true;
    }

    // var_dump($member_row);
    $nickname = htmlspecialchars($member_row['nickname']);
  }


?>