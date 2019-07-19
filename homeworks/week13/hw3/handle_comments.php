<?php

  require_once("./conn.php");
  require_once("./handle_paging.php");
  require_once("./handle_subcomments.php");

  $result['data_nums'] = $data_nums;
  $result['per'] = $per;
  $result['totalPage'] = $totalPage;

  if ($cur_comm_result->num_rows > 0) {
    while($cur_comm_row = $cur_comm_result->fetch_assoc()) {

      $comm_arr = array (
        'id' => $cur_comm_row["id"],
        'parents_id' => $cur_comm_row["parents_id"],
        'name' => $cur_comm_row["name"],
        'context' => $cur_comm_row["context"],
        'created_at' => $cur_comm_row["created_at"]
      );
      $result['comm_arr'][] = $comm_arr;
    }
  }

  echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>