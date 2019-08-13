/* eslint no-param-reassign: "off" */
$(document).ready(() => {

  let list = [
    {
      content: '吃飯',
      status: 0,
    },
    {
      content: '睡覺',
      status: 1,
    },
    {
      content: '打丁丁',
      status: 0,
    },
    {
      content: '打東東',
      status: 1,
    },
  ];

  // render 畫面
  function render() {
    $('.list__container').empty();
    $('.list__container').append(list.map((item) => {

      // 未完成
      if (item.status === 0) {
        return `<li class="list__item">
        <button class="btn tooltip handle__check list__checkbox" type="button">
          <span class="tooltiptext">完成</span>
        </button>
        <p class="list__context">${item.content}</p>
        <button class="btn del__btn tooltip" type="button">
          <span class='ri-cross'></span>
          <span class="tooltiptext">刪除</span>
        </button>
      </li>`;
      }

      // 完成
      return `<li class="list__item finished">
        <button class="btn tooltip handle__check" type="button">
          <span class="ri-check-square"></span>
        </button>
        <p class="list__context">${item.content}</p>
        <button class="btn del__btn tooltip" type="button">
          <span class='ri-cross'></span>
          <span class="tooltiptext">刪除</span>
        </button>
      </li>`;
    }));
  }


  function addTodo(todo) {
    const obj = {
      content: todo,
      status: 0,
    };
    list.push(obj);
    render();
  }

  function removeTodo(todo) {
    list = list.filter(item => item.content !== todo);
    render();
  }

  // 初始化
  render();

  // 新增 item
  $('.list__input').keydown((e) => {
    const $this = $(e.currentTarget);

    if (e.which === 13) {
      const context = $this.val();
      addTodo(context);
      $this.val('');
    }
  });

  // 刪除 item
  $('.list__container').on('click', '.ri-cross', (e) => {
    const $this = $(e.currentTarget).closest('li').find('p')[0].innerHTML;
    removeTodo($this);
  });

  // 完成 or 未完成切換
  $('.list__container').on('click', '.handle__check', (e) => {
    const $this = $(e.currentTarget);
    const currentContent = $this.parent().find('p')[0].innerHTML;

    list.map((item) => {
      if (item.content === currentContent) {
        if ($this.hasClass('list__checkbox')) {
          item.status = 1;
        } else {
          item.status = 0;
        }
      }
      return item;
    });

    render();
  });
});
