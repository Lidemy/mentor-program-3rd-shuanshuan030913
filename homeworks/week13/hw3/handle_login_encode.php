<?php

  require_once("./check_login.php");

  $result['is_login'] = $is_login;
  $result['nickname'] = $nickname;
  echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>