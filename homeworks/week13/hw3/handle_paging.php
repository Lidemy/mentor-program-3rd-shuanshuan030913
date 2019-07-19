<?php
  require_once("./conn.php");

  $page = intval($_POST['pageNum']); // 當前頁

  $comm_sql = "SELECT * from shuanshuan030913_comments WHERE parents_id = 0 ORDER BY created_at DESC";
  $comm_result = $conn->query($comm_sql);

  $data_nums = $comm_result->num_rows;
  // var_dump($data_nums);
  $per = 20;
  $totalPage = ceil($data_nums/$per);
  $start = ($page - 1)*$per;
  $cur_comm_result = $conn->query($comm_sql.' LIMIT '.$start.', '.$per);
?>