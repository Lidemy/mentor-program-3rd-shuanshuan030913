$(document).ready(() => {

  // 新增 item
  $('.list__input').keydown((e) => {
    const $this = $(e.currentTarget);

    if (e.which === 13) {
      const context = $this.val();
      $('.list__container').prepend(`
      <li class="list__item">
        <button class="btn list__checkbox tooltip handle__check" type="button">
          <span class="tooltiptext">完成</span>
        </button>
        <p class="list__context">${context}</p>
        <button class="btn del__btn tooltip" type="button">
          <span class='ri-cross'></span>
          <span class="tooltiptext">刪除</span>
        </button>
      </li>
      `);
      $this.val('');
    }
  });


  // 刪除 item
  $('.list__container').on('click', '.ri-cross', (e) => {
    const $this = $(e.currentTarget);
    $this.closest('li').remove();
  });

  // 完成 or 未完成切換
  $('.list__container').on('click', '.handle__check', (e) => {
    const $this = $(e.currentTarget);

    if ($this.hasClass('list__checkbox')) {
      $this.removeClass('list__checkbox').html('<span class="ri-check-square"></span>');
      $this.parent().addClass('finished');
    } else {
      $this.addClass('list__checkbox').html('<span class="tooltiptext">完成</span>');
      $this.parent().removeClass('finished');
    }
  });

});
