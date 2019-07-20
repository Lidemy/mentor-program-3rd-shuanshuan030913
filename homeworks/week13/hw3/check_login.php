<?php

  require_once("./conn.php");

  $is_login = false;

  session_start();

  if (isset($_SESSION['nickname'])) {
    $is_login = true;
    $nickname = htmlspecialchars($_SESSION['nickname']);
  }
?>