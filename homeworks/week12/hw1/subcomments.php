<?php

  // 主要留言 id
  $comm_id = $comm_row['id'];

  $sub_comm_sql = "SELECT * from shuanshuan030913_comments WHERE parents_id != 0 ORDER BY created_at ASC";
  $sub_comm_result = $conn->query($sub_comm_sql);

  if ($sub_comm_result->num_rows > 0) {
    while($row = $sub_comm_result->fetch_assoc()) {

      if ($row['parents_id'] === $comm_id) {

        // 列表

        // 如果是樓主的子留言則顯示底色
        if ($row['name'] === $comm_name) {
          echo "<div class='card sub-card owner_bg'>";
        } else {
          echo "<div class='card sub-card'>";
        }
        echo     "<div class='card__member-face'></div>";
        echo     "<div class='card__innner-text'>";

        // 會員可以編輯自己的留言
        if($is_login && $member_result->num_rows > 0) {
          if ($row['name'] === $nickname) {
            $comment_id = $row['id'];
            echo  "<a href='./upt_msg.php?id=" . $comment_id . "' class='edit__btn' title='編輯'><span class='ri-pencil'></span></a>";
            echo  "<a href='./handle_delete.php?id=" . $comment_id . "' class='del__btn' title='刪除'><span class='ri-trash'></span></a>";
          }
        }

        // 留言內容顯示
        echo       "<div class='card__info'>";
        echo         "<span class='card__info-name'>" . $row['name'] . "<span class='card__info-time'> ‧ " . $row['created_at'] . "</span>";
        echo       "</div>";
        echo       "<p class='card__input-text'>" . htmlspecialchars($row['context'], ENT_QUOTES, 'utf-8') . "</p>";

        echo     "</div>";
        echo   "</div>";
      }
    }
  }

?>