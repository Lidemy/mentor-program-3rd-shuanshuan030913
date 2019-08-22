<?php

  require_once("./conn.php");

  $comm_sql = "SELECT * from list_content ORDER BY created_at ASC";
  $comm_result = $conn->query($comm_sql);

  if ($comm_result->num_rows > 0) {
    while($comm_row = $comm_result->fetch_assoc()) {
      $result[] = $comm_row;
    }
  }

  echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>
