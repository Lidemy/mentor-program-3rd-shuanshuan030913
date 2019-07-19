<?php

  require_once("./conn.php");

  $sub_comm_sql = "SELECT * from shuanshuan030913_comments WHERE parents_id != 0 ORDER BY created_at ASC";
  $sub_comm_result = $conn->query($sub_comm_sql);

  if ($sub_comm_result->num_rows > 0) {
    while($sub_comm_row = $sub_comm_result->fetch_assoc()) {
      $comm_arr = array (
        'id' => $sub_comm_row["id"],
        'parents_id' => $sub_comm_row["parents_id"],
        'name' => $sub_comm_row["name"],
        'context' => $sub_comm_row["context"],
        'created_at' => $sub_comm_row["created_at"]
      );
      $result['sub_comm_arr'][] = $comm_arr;
    }
  }
?>