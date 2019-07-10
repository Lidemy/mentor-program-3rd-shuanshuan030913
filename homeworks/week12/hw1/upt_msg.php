<?php

  require_once("./conn.php");

  // 留言資料
  $id = $_GET['id'];
  $comm_sql = "SELECT * from shuanshuan030913_comments WHERE `id` = $id";
  $comm_result = $conn->query($comm_sql);

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
    <form class="modal-form login-form" method="POST" action="./handle_update.php?id=<?php echo $id?>">
      <h2 class="modal-title edit-title">編輯留言</h2>
      <hr>
      <div class="form-row">
        <?php
            if ($comm_result->num_rows > 0) {
              while($row = $comm_result->fetch_assoc()) {
                echo "<textarea class='form__textarea full' type='text' rows='3' name='context' required>" . $row['context'] . "</textarea>";
              }
            }
         ?>
      </div>
      <div class="form-row">
        <button class="btn form__btn">送出</button>
      </div>
    </form>
    </section>
  </main>
</body>
</html>