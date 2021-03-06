<?php

  require_once("./conn.php");

  // 留言資料
  $comm_sql = "SELECT * from shuanshuan030913_comments ORDER BY created_at DESC";
  $comm_result = $conn->query($comm_sql);

  // 分頁用變數
  $data_nums = $comm_result->num_rows;
  // var_dump($data_nums);
  $per = 20;
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
        if(!isset($_COOKIE["PHPSESSID"])) {
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
      if(!isset($_COOKIE["PHPSESSID"])) {
        echo "";
      } else {

        // 會員資料
        $member_id = $_COOKIE['PHPSESSID'];
        $member_sql = "SELECT * from shuanshuan030913_users LEFT JOIN shuanshuan030913_users_certificate
ON shuanshuan030913_users.username = shuanshuan030913_users_certificate.username WHERE `session_id`='$member_id'";
        $member_result = $conn->query($member_sql);

        if ($member_result->num_rows > 0) {
          while($row = $member_result->fetch_assoc()) {
            echo "<p class='welcome'>有什麼想說的嗎？ "  . $row['nickname'] . "</p>";
          }
        }
        echo "<form class='form' method='POST' action='./handle_add.php'>";
        echo   "<textarea class='form__textarea' type='text' rows='3' name='context' placeholder='請輸入你的留言...' required></textarea>";
        echo   "<button class='btn form__btn'>送出</button>";
        echo "</form>";
      }
    ?>
    <hr>
    <section class="board__data">
      <?php

        if ($comm_result->num_rows > 0) {
          while($row = $comm_result->fetch_assoc()) {
            echo "<div class='card'>";
            echo   "<div class='card__member-face'></div>";
            echo   "<div class='card__innner-text'>";

            // 會員比對
            if(isset($_COOKIE["PHPSESSID"])) {
              $member_id = $_COOKIE['PHPSESSID'];
              $member_sql = "SELECT * from shuanshuan030913_users LEFT JOIN shuanshuan030913_users_certificate
      ON shuanshuan030913_users.username = shuanshuan030913_users_certificate.username WHERE `session_id`='$member_id'";
              $member_result = $conn->query($member_sql);

              if ($member_result->num_rows > 0) {
                while($cookie_row = $member_result->fetch_assoc()) {
                  if ($row['name'] === $cookie_row['nickname']) {
                    $comment_id = $row['id'];
                    echo  "<a href='./upt_msg.php?id=" . $comment_id . "' class='edit__btn' title='編輯'><span class='ri-pencil'></span></a>";
                    echo  "<a href='./handle_delete.php?id=" . $comment_id . "' class='del__btn' title='刪除'><span class='ri-trash'></span></a>";
                  }
                }
              }
            }
            echo     "<div class='card__info'>";
            echo       "<span class='card__info-name'>" . $row['name'] . "<span class='card__info-time'> ‧ " . $row['created_at'] . "</span>";
            echo     "</div>";
            echo   "<p class='card__input-text'>" . $row['context'] . "</p>";
            echo   "</div>";
            echo "</div>";
          }
        }
      ?>
      <hr>
      <div class='board__footer'>
        <?php
          //分頁頁碼
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

      <!-- <div class="card">
        <div class="card__member-face"></div>
        <div class="card__innner-text">
          <div class="card__info">
            <span class="card__info-name">菜菜子</span> ‧ <span class="card__info-time">5月18日</span>
          </div>
          <p class="card__input-text">對冬樹而言，通通都是鬼，等等我嘛，這麼一講，再丟到宇宙去，我來早了，〝日向秋，這是什麼計劃，哥哥，發高燒了，振作一點啊，良心生意，我來了，遭遇暴風雪時，可能吧，再見囉，骷髏一號，還好，既然被你聽見，退後，一百圓很便宜，臭小偷。</p>
        </div>
      </div> -->
    </section>
  </main>
  <script type="text/javascript">
    // Get the modal
    const loginModal = document.querySelector("#loginModal");

    const btn = document.querySelector(".login-btn");

    const login = document.querySelector(".login-form");
    const signUp = document.querySelector(".signup-form");
    const toggle = document.querySelector(".toggle-form");
    const span = document.querySelector(".close");


    btn.addEventListener('click', function() {
      if (btn.innerHTML === '會員登入') {
        loginModal.style.display = "block";
      }
    });

    toggle.addEventListener('click', function() {
      if (login.style.display !== 'none') {
        login.style.display = 'none';
        signUp.style.display = 'block';
        toggle.innerHTML = '我是會員！我要登入';
      } else {
        login.style.display = 'block';
        signUp.style.display = 'none';
        toggle.innerHTML = '沒有會員？我要註冊';
      }
    });

    span.addEventListener('click', function() {
      loginModal.style.display = "none";
    });

  </script>
</body>
</html>