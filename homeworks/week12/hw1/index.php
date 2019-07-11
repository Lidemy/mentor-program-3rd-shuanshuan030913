<?php

  require_once("./conn.php");

  // 1. 留言資料
  $comm_sql = "SELECT * from shuanshuan030913_comments WHERE parents_id = 0 ORDER BY created_at DESC";
  $comm_result = $conn->query($comm_sql);


  // 2. 會員資料
  require_once("./check_login.php");

  // 3. 分頁用變數
  $data_nums = $comm_result->num_rows;
  // var_dump($data_nums);
  $per = 15;
  $pages = ceil($data_nums/$per);
  if (!isset($_GET['page'])) {
    $page = 1;
  } else {
    $page = intval($_GET['page']);
  }
  $start = ($page - 1)*$per;
  $comm_result = $conn->query($comm_sql.' LIMIT '.$start.', '.$per);

?>

<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <title>留言板</title>
  <link rel="stylesheet" href="./style.css">
  <link rel="stylesheet" href="./WebFont/style.css">
</head>
<body>
  <header class="warning">
    <strong>注意！本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼。</strong>
  </header>
  <main class="board">
    <h1 class="title">Comments
      <?php
        // cookie check
        if(!$is_login) {
          echo "<button class='btn login-btn' title='登入後即可新增留言'>會員登入</button>";
        } else {
          $link = 'window.location.href="./handle_logout.php"';
          echo "<button type='submit' class='btn login-btn' onclick='$link'>會員登出</button>";
        }
      ?>
    </h1>

    <div id="loginModal" class="modal">

      <!-- Modal content -->
      <div class="modal-content">
        <span class="close">&times;</span>
        <form class="modal-form login-form" method="POST" action="./handle_login.php">
          <h2 class="modal-title">會員登入</h2>
          <div class="form-row">
            <label>帳號：</label>
            <input type="text" name="username">
          </div>
          <div class="form-row">
            <label>密碼：</label>
            <input type="password" name="password">
          </div>
          <div class="form-row">
            <button class="btn form__btn">登入</button>
          </div>
        </form>

        <form class="modal-form signup-form" method="POST" action="./handle_signUp.php">
          <h2 class="modal-title">註冊會員</h2>

          <div class="form-row">
            <label>帳號：</label>
            <input type="text" name="username">
          </div>
          <div class="form-row">
            <label>密碼：</label>
            <input type="password" name="password">
          </div>
          <div class="form-row">
            <label>暱稱：</label>
            <input type="text" name="nickname">
          </div>
          <div class="form-row">
            <button class="btn form__btn">送出</button>
          </div>
        </form>

        <span class="toggle-form">沒有會員？我要註冊</span>
      </div>

    </div>

    <?php
      // cookie check
      if($is_login) {
        echo "<p class='welcome'>有什麼想說的嗎？ "  . $nickname . "</p>";
        echo "<form class='form' method='POST' action='./handle_add.php'>";
        echo   "<input type='hidden' name='parents_id' value='0'>";
        echo   "<textarea class='form__textarea' type='text' rows='3' name='context' placeholder='請輸入你的留言...' required></textarea>";
        echo   "<button class='btn form__btn'>送出</button>";
        echo "</form>";
      }
    ?>
    <hr>
    <section class="board__data">
      <?php

        if ($comm_result->num_rows > 0) {
          while($comm_row = $comm_result->fetch_assoc()) {

            $parents_id = $comm_row['parents_id'];
            $id = $comm_row['id'];
            $comm_name = htmlspecialchars($comm_row['name']);

            echo "<div class='card-group'>";
            echo   "<div class='card'>";
            echo     "<div class='card__member-face'></div>";
            echo     "<div class='card__innner-text'>";

            // 會員可以編輯自己的留言
            if($is_login && $member_result->num_rows > 0) {
              if ($comm_name === $nickname) {
                $comment_id = $comm_row['id'];
                $confirm_msg = '"刪除此筆留言，下列回覆您的留言串將會全部刪除！確定刪除嗎？"';
                echo  "<a href='./upt_msg.php?id=" . $comment_id . "' class='edit__btn' title='編輯'><span class='ri-pencil'></span></a>";
                echo  "<a href='./handle_delete.php?id=" . $comment_id . "' class='del__btn' title='刪除' onclick='return confirm(" . $confirm_msg . ");'><span class='ri-trash'></span></a>";
              }
            }

            // 留言內容顯示
            echo       "<div class='card__info'>";
            echo         "<span class='card__info-name'>" . $comm_name . "<span class='card__info-time'> ‧ " . $comm_row['created_at'] . "</span>";
            echo       "</div>";
            echo       "<p class='card__input-text'>" . htmlspecialchars($comm_row['context'], ENT_QUOTES, 'utf-8') . "</p>";
            echo     "</div>";
            echo   "</div>";


            // 登入後可回復留言
            if($is_login) {
              echo "<div class='card sub-card'>";
              echo   "<button type='button' class='btn btn-sm review-btn'>回復</button>";
              echo "</div>";
            }

            include("./subcomments.php");

            // 表單
            echo   "<div class='card sub-card card__review-form'>";
            echo     "<div class='card__member-face'></div>";
            echo     "<div class='card__innner-text'>";
            echo       "<div class='card__info'>";

            // 會員名稱
            if ($is_login) {
              echo     "<span class='card__info-name'>" . $nickname;
            }

            echo       "</div>";
            echo       "<form class='form' method='POST' action='./handle_add.php'>";
            echo         "<input type='hidden' name='parents_id' value='" . $id . "'>";
            echo         "<textarea class='form__textarea'  name='context' required></textarea>";
            echo         "<button class='btn form__btn'>送出</button>";
            echo       "</form>";
            echo     "</div>";
            echo   "</div>";

            echo "</div>";
          }
        }
      ?>
      <hr>

      <!-- card 範例
      <div class="card">
        <div class="card__member-face"></div>
        <div class="card__innner-text">
          <a href='./upt_msg.php?id=1' class='edit__btn' title='編輯'><span class='ri-pencil'></span></a>
          <a href='./handle_delete.php?id=1' class='del__btn' title='刪除'><span class='ri-trash'></span></a>
          <div class="card__info">
            <span class="card__info-name">菜菜子</span> ‧ <span class="card__info-time">5月18日</span>
          </div>
          <p class="card__input-text">對冬樹而言，通通都是鬼，等等我嘛，這麼一講，再丟到宇宙去，我來早了，〝日向秋，這是什麼計劃，哥哥，發高燒了，振作一點啊，良心生意，我來了，遭遇暴風雪時，可能吧，再見囉，骷髏一號，還好，既然被你聽見，退後，一百圓很便宜，臭小偷。</p>
        </div>
      </div> -->

      <!-- 頁碼 -->
      <div class='board__footer'>
        <?php
          echo   "<small>共 ".$data_nums." 筆 - 在 ".$page." 頁 - 共 ".$pages." 頁</small>";
          echo   "<div class='board__footer--link'>";
          echo     "<a href=?page=1 class='btn board__footer--btn'><i class='ri-arrow-left'></i> 首頁</a>";
          echo     "第 ";
          for( $i=1 ; $i<=$pages ; $i++ ) {
              if ( $page-3 < $i && $i < $page+3 ) {
                  echo "<a href=?page=".$i." class='btn board__footer--btn'>".$i."</a> ";
              }
          }
          echo     "<span> 頁</span>";
          echo     "<a href=?page=".$pages." class='btn board__footer--btn'>末頁 <i class='ri-arrow-right'></i></a>";
          echo   "</div>";
        ?>
      </div>
    </section>
  </main>
  <script src="./main.js"></script>
</body>
</html>