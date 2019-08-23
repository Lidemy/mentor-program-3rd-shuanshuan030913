/* eslint no-param-reassign: "off" */
$(document).ready(() => {

  function render(result) {

    // initial
    $('.list__container').empty();

    // loading comment
    $('.list__container').append(result.map((item) => {

      // 未完成
      if (Number(item.status) === 0) {
        return `<li class="list__item " data-id="${item.id}" data-status="${item.status}">
        <button class="btn tooltip handle__check list__checkbox" type="button">
          <span class="tooltiptext">完成</span>
        </button>
        <div class="list__content">
          <p>${item.content}</p>
        </div>
        <button class="btn del__btn tooltip" type="button">
          <span class='ri-cross'></span>
          <span class="tooltiptext">刪除</span>
        </button>
      </li>`;
      }

      // 完成
      return `<li class="list__item finished" data-id="${item.id}" data-status="${item.status}">
        <button class="btn tooltip handle__check" type="button">
          <span class="ri-check-square"></span>
        </button>
        <div class="list__content">
          <p>${item.content}</p>
        </div>
        <button class="btn del__btn tooltip" type="button">
          <span class='ri-cross'></span>
          <span class="tooltiptext">刪除</span>
        </button>
      </li>`;
    }));
  }

  function getFullResult() {
    $.ajax({
      url: './api/get_all_lists.php',
      type: 'GET',
      dataType: 'json',
      success: (result) => {
        render(result);
      },
      error: (result) => {
        console.log('result error', result);
        $('body').html(result.responseText);
      },
    });
  }

  // 獲取單一 todo 示範
  // function getAResult(dbLimit) {
  //   $.ajax({
  //     url: './api/get_list.php',
  //     type: 'GET',
  //     data: {
  //       _limit: dbLimit,
  //     },
  //     dataType: 'json',
  //     success: (result) => {
  //       render(result);
  //     },
  //     error: (result) => {
  //       console.log('result error', result);
  //       $('body').html(result.responseText);
  //     },
  //   });
  // }

  function handleAdd(addText) {
    $.ajax({
      url: './api/handle_add.php',
      type: 'POST',
      data: {
        status: 0,
        content: addText,
      },
      dataType: 'json',
      success: () => {
        getFullResult();
      },
      error: (result) => {
        console.log('add error!');
        console.log('result', result);
        $('body').html(result.responseText);
      },
    });
  }

  function handleDelete(dataId) {
    $.ajax({
      url: './api/handle_delete.php',
      type: 'POST',
      data: { id: dataId },
      dataType: 'json',
      success: () => {
        getFullResult();
      },
      error: (result) => {
        console.log('delete error!');
        console.log('result', result);
        $('body').html(result.responseText);
      },
    });
  }

  function handleUptText(dataId, uptStatus, uptText) {
    $.ajax({
      url: './api/handle_update.php',
      type: 'POST',
      data: {
        id: dataId,
        status: uptStatus,
        content: uptText,
      },
      dataType: 'json',
      success: () => {
        getFullResult();
      },
      error: (result) => {
        console.log('upt error!');
        console.log('result', result);
        $('body').html(result.responseText);
      },
    });
  }

  // 初始化
  getFullResult();

  // 新增 item
  $('.list__input').keydown((e) => {
    const $this = $(e.currentTarget);
    if (e.which === 13) {
      handleAdd($this.val());
      $this.val('');
      getFullResult();
    }
  });

  // 刪除 item
  $('.list__container').on('click', '.ri-cross', (e) => {
    const $this = $(e.currentTarget).closest('li');
    handleDelete($this.attr('data-id'));
  });

  // 修改 item -- 切換編輯模式
  $('.list__container').on('dblclick', '.list__content', (e) => {
    const $this = $(e.currentTarget);
    $this.html('<input type="text" class="input__element">');
  });

  // 修改 item -- 送出修改
  $('.list__container').on('keydown', '.input__element', (e) => {

    if (e.which === 13) {
      const $this = $(e.currentTarget);
      const listId = $this.closest('li').attr('data-id');
      const listStatus = $this.closest('li').attr('data-status');

      // 如果沒有輸入值，重新提取原資料
      if ($this[0].value) {
        handleUptText(listId, listStatus, $this[0].value);
      } else {
        getFullResult();
      }
    }

  });

  // 切換完成
  $('.list__container').on('click', '.handle__check', (e) => {
    const $this = $(e.currentTarget);
    const listId = $this.closest('li').attr('data-id');
    const listText = $this.siblings('.list__content').children().html();

    let listStatus = $this.closest('li').attr('data-status');
    listStatus = listStatus === '0' ? '1' : '0';
    handleUptText(listId, listStatus, listText);
  });

});
