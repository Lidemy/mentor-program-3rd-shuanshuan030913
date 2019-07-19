<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <title>留言板</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" href="./style.css">
  <link rel="stylesheet" href="./WebFont/style.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
</head>
<body>
  <header class="warning px-2">
    <strong>注意！本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼。</strong>
  </header>
  <div class="container-fluid px-5">
    <div class="row">
      <main class="board mx-auto col-lg-6 col-md-8 col-sm-12">
        <h1 class="title"></h1>

        <div id="loginModal" class="modal">

          <!-- Modal content -->
          <div class="modal-content">
            <span class="close">&times;</span>
            <form class="modal-form login-form" method="POST" action="./handle_login.php">
              <h2 class="modal-title mb-4">會員登入</h2>
              <div class="form-group row">
                <label class="col-sm-2 col-form-label">帳號：</label>
                <input class="col-sm-9" type="text" name="username">
              </div>
              <div class="form-group row">
                <label class="col-sm-2 col-form-label">密碼：</label>
                <input class="col-sm-9" type="password" name="password">
              </div>
              <div class="form-group">
                <button class="btn form__btn">登入</button>
              </div>
            </form>

            <form class="modal-form signup-form" method="POST" action="./handle_signUp.php">
              <h2 class="modal-title mb-4">註冊會員</h2>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">帳號：</label>
                <input class="col-sm-9" type="text" name="username">
              </div>
              <div class="form-group row">
                <label class="col-sm-2 col-form-label">密碼：</label>
                <input class="col-sm-9" type="password" name="password">
              </div>
              <div class="form-group row">
                <label class="col-sm-2 col-form-label">暱稱：</label>
                <input class="col-sm-9" type="text" name="nickname">
              </div>
              <div class="form-group">
                <button class="btn form__btn">送出</button>
              </div>
            </form>

            <span class="toggle-form">沒有會員？我要註冊</span>
          </div>

        </div>

        <div class="send__comment"></div>

        <hr>
        <section class="board__data">
          <div id="boardData">
          </div>
          <hr>

          <!-- 頁碼 -->
          <div class='board__footer' id="pageData"></div>
        </section>
      </main>
    </div>
  </div>
  <script src="./main.js"></script>
</body>
</html>