/* eslint no-shadow: ["error", { "allow": ["curPage", "loginNickname"] }] */
/* eslint no-restricted-globals:0 */
/* eslint quote-props: 0 */
/* eslint prefer-destructuring: 0 */
/* eslint no-alert: 0 */

$(document).ready(() => {


  // 功能元件設定
  // =================================================

  let isLogin = false;
  let loginNickname = '';
  let curPage;

  function getCtrlBtn() {
    const ctrlBtn = `<button class='edit__btn' title='編輯'>
        <span class='ri-pencil'></span>
      </button>
      <button class='del__btn' title='刪除'>
        <span class='ri-trash'></span>
      </button>`;
    return ctrlBtn;
  }

  function getPageData(dataNums, per, totalPage, curPage) {
    let showPaging = '';
    for (let p = 1; p <= totalPage; p++) {
      showPaging += `<button type='button' class='btn board__footer--btn' data-page='${p}'>${p}</button>`;
    }

    const pageData = `<div class='board__footer'>
      <small>共 ${dataNums} 筆 - 在 ${curPage} 頁 - 共 ${totalPage} 頁</small>
        <div class='board__footer--link' id='footerPages'>
          <button type='button' class='btn board__footer--btn' data-page='1'><i class='ri-arrow-left'></i> 首頁</button>
          第${showPaging}<span> 頁</span>
          <button type='button' class='btn board__footer--btn' data-page='${totalPage}'>末頁 <i class='ri-arrow-right'></i></button>
        </div>
    </div>`;
    return pageData;
  }

  function getComment(id, name, createdAt, context) {
    let ctrlBtn = '';
    let reviewBtn = '';

    if (isLogin) {
      reviewBtn = `<div class='list sub-list'>
          <button type='button' class='btn btn-sm review-btn'>回復</button>
        </div>`;
      if (loginNickname === name) {
        ctrlBtn = getCtrlBtn();
      }
    }

    const ComData = `<div class='list-group'>
      <div class='list'>
        <div class='list__member-face'></div>
        <div class='list__innner-text' data-id=${id}>
          ${ctrlBtn}
          <div class='list__info'>
            <span class='list__info-name'>${name}<span class='list__info-time'> ‧ ${createdAt}</span>
          </div>
          <p class='list__input-text'>${context}</p>
        </div>
      </div>
      ${reviewBtn}
    </div>`;
    return ComData;
  }

  function getSubComment(subId, subName, mainName, subCreatedAt, subContext) {
    let ctrlBtn = '';
    let ownerColor = '';

    if (isLogin && loginNickname === subName) {
      ctrlBtn = getCtrlBtn();
    }

    if (subName === mainName) {
      ownerColor = 'owner_bg';
    }

    const subData = `<div class='list sub-list ${ownerColor}'>
      <div class='list__member-face'></div>
      <div class='list__innner-text' data-id=${subId}>
        ${ctrlBtn}
        <div class='list__info'>
          <span class='list__info-name'>${subName}<span class='list__info-time'> ‧ ${subCreatedAt}</span>
        </div>
        <p class='list__input-text'>${subContext}</p>
      </div>
    </div>`;
    return subData;
  }

  function getCommentForm(loginNickname) {
    const sendCommentForm = `<p class='welcome'>有什麼想說的嗎？ ${loginNickname}</p>
      <form class='form'>
        <textarea class='form__textarea' type='text' rows='3' name='context' placeholder='請輸入你的留言...' required></textarea>
        <button type='button' class='btn form__btn new_submit'>送出</button>
      </form>`;
    return sendCommentForm;
  }

  function getReplyForm(id, name) {
    const reviewForm = `<div class='list sub-list list__review-form'>
      <div class='list__member-face'></div>
      <div class='list__innner-text'>
        <div class='list__info'>
          <span class='list__info-name'>${name}</span>
        </div>
        <form class='form' data-p-id='${id}'>
          <textarea class='form__textarea mr-2'  name='context' required></textarea>
          <button type='button' class='btn form__btn new_reply_submit'>送出</button>
        </form>
      </div>
    </div>`;
    return reviewForm;
  }

  // ajax
  // =================================================
  // 主留言內容和分頁控制
  function getData(page) {
    $.ajax({
      url: './handle_comments.php',
      type: 'POST',
      data: { 'pageNum': page },
      dataType: 'json',
      success: (result) => {

        // initial
        $('#boardData').html('');

        // loading page
        const dataNums = result.data_nums;
        const per = result.per;
        const totalPage = result.totalPage;
        curPage = page;

        $('#pageData').html(getPageData(dataNums, per, totalPage, curPage));

        // change current pages
        $('#footerPages').on('click', '.board__footer--btn', (e) => {
          const $this = $(e.currentTarget);
          if ($this.attr('data-page')) {
            getData($this.attr('data-page'));
          }
        });


        // loading comment
        const commResult = result.comm_arr;
        const subCommResult = result.sub_comm_arr;

        commResult.forEach((item) => {
          const id = item.id;
          const name = item.name;
          const createdAt = item.created_at;
          const context = item.context;

          $('#boardData').append(getComment(id, name, createdAt, context));

          subCommResult.forEach((subItem) => {
            const subParentsId = subItem.parents_id;
            const subId = subItem.id;
            const subName = subItem.name;
            const subCreatedAt = subItem.created_at;
            const subContext = subItem.context;

            if (subParentsId === id) {
              $('.list-group:last-child').append(getSubComment(subId, subName, name, subCreatedAt, subContext));
            }
          });

          $('.list-group:last-child').append(getReplyForm(id, loginNickname));
        });

        // login
        if (isLogin) {
          const toggleLogin = `Comments
            <button type='submit' class='btn login-btn' onclick='window.location.href="./handle_logout.php"'>會員登出</button>
            `;
          $('.title').html(toggleLogin);
          $('.send__comment').html(getCommentForm(loginNickname));
        } else {
          const toggleLogin = `Comments
          <button class='btn login-btn' title='登入後即可新增留言'>會員登入</button>`;
          $('.title').html(toggleLogin);
        }

      },
      error: (result) => {
        console.log('result error', result);
      },
    });
  }

  function islogin() {
    $.ajax({
      url: './handle_login_encode.php',
      type: 'GET',
      dataType: 'json',
      success: (result) => {
        isLogin = result.is_login;
        loginNickname = result.nickname;
      },
      error: (result) => {
        console.log('result', result);
        $('body').html(result.responseText);
      },
    });
  }

  function handleDelete(id, curPage) {
    $.ajax({
      url: './handle_delete.php',
      type: 'POST',
      data: { 'id': id },
      dataType: 'json',
      success: (result) => {
        console.log('delete success! result = ', result);
        getData(curPage);
      },
      error: (result) => {
        console.log('delete error!');
        console.log('result', result);
        $('body').html(result.responseText);
      },
    });
  }

  function handleUpt(id, context, curPage) {
    $.ajax({
      url: './handle_update.php',
      type: 'POST',
      data: { 'id': id, 'context': context },
      dataType: 'json',
      success: (result) => {
        console.log('upt success! result = ', result);
        getData(curPage);
      },
      error: (result) => {
        console.log('upt error!');
        console.log('result', result);
        $('body').html(result.responseText);
      },
    });
  }

  function handleAdd(parentsId, context, curPage) {
    $.ajax({
      url: './handle_add.php',
      type: 'POST',
      data: { 'context': context, 'parents_id': parentsId },
      dataType: 'json',
      success: (result) => {
        console.log('add success! result = ', result);
        getData(curPage);
      },
      error: (result) => {
        console.log('add error!');
        console.log('result', result);
        $('body').html(result.responseText);
      },
    });
  }

  // Go Go Go !
  // =================================================
  getData(1);
  islogin();

  $('.board__data').on('click', '.del__btn', (e) => {

    let result = '';

    if ($(e.currentTarget).parent().parent().hasClass('sub-list')) {
      result = confirm('刪除留言無法再復原！確定刪除嗎？');
    } else {
      result = confirm('刪除此筆留言，下列回覆您的留言串將會全部刪除！確定刪除嗎？');
    }

    if (result) {
      handleDelete($(e.currentTarget).parent().attr('data-id'), curPage);
      alert('刪除的留言就像花出去的錢，哭都回不來，自己剁手吧！');
    }

  });

  $('.board__data').on('click', '.review_submit', (e) => {

    const id = $(e.currentTarget).parent().parent().attr('data-id');
    const context = $(e.currentTarget).parent().children('.form__textarea').val();
    handleUpt(id, context, curPage);
    alert('成功更新留言！');

  });

  $('.send__comment').on('click', '.new_submit', (e) => {

    const context = $(e.currentTarget).parent().children('.form__textarea').val();
    const parentsId = 0;

    if (context) {
      handleAdd(parentsId, context, curPage);
      alert('成功新增留言！');
    } else {
      alert('請輸入留言內容！');
      getData(curPage);
    }

  });

  $('.board__data').on('click', '.new_reply_submit', (e) => {

    const context = $(e.currentTarget).parent().children('.form__textarea').val();
    const parentsId = $(e.currentTarget).parent().attr('data-p-id');

    if (context) {
      handleAdd(parentsId, context, curPage);
      alert('成功新增留言！');
    } else {
      alert('請輸入留言內容！');
      getData(curPage);
    }

  });


  // 靜態網頁功能切換
  // =================================================

  // Get the modal
  $('.title').on('click', '.login-btn', () => {
    if ($('.login-btn').html() === '會員登入') {
      $('#loginModal').css('display', 'block');
    }
  });

  $('.toggle-form').click(() => {
    $('.login-form').toggle();
    $('.signup-form').toggle();

    if ($('.login-form').css('display') !== 'none') {
      $('.toggle-form').html('我是會員！我要登入');
    } else {
      $('.toggle-form').html('沒有會員？我要註冊');
    }
  });

  $('.close').click(() => {
    $('#loginModal').css('display', 'none');
  });


  // 回復留言表單開關
  $('.board__data').on('click', '.review-btn', (e) => {
    const $this = $(e.currentTarget);
    $this.parent().css('display', 'none');
    $this.parent().parent().children('.list__review-form').css('display', 'flex');
  });

  // 編輯留言開關
  $('.board__data').on('click', '.edit__btn', (e) => {
    const $this = $(e.currentTarget);
    // 紀錄留言內容
    const editText = $this.parent().children().last().html();
    $this.parent().children('.list__input-text').css('display', 'none');

    $this.parent().children('.edit__btn').css('display', 'none');
    $this.parent().children('.del__btn').css('display', 'none');
    $this.parent().append(`<button class='redo__btn' title='取消編輯'><span class='ri-redo'></span>
          </button>
      <form class='form'>
      <input type='hidden' name='parents_id' value=11>
      <textarea class='form__textarea mr-2'  name='context' required>${editText}</textarea>
      <button type='button' class='btn form__btn review_submit'>送出</button>
    </form>`);
  });

  // 取消編輯留言
  $('.board__data').on('click', '.redo__btn', (e) => {
    const $this = $(e.currentTarget);
    $this.parent().children().last().remove('');
    $this.parent().children('.list__input-text').css('display', 'block');

    $this.parent().children('.edit__btn').css('display', 'block');
    $this.parent().children('.del__btn').css('display', 'block');
    $this.parent().children('.redo__btn').remove();
  });
});
