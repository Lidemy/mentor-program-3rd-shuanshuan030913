<?php

  require_once("./conn.php");

  $stmt = $conn->prepare("SELECT * from list_content ORDER BY created_at DESC LIMIT ?");

  $stmt->bind_param("s", $_GET["_limit"]);
  $stmt->execute();
  $list_result = $stmt->get_result();
  if ($list_result->num_rows > 0) {
    while($row = $list_result->fetch_assoc()) {
      $result[] = $row;
    }
  }

  echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>
