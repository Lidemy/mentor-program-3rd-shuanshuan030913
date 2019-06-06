const boardData = document.querySelector('.board__data');
const newData = document.querySelector('.form__textarea');
const btn = document.querySelector('.form__btn');
let result;

function showMessage(data) {
  // 清除重 load
  boardData.innerHTML = '';
  for (let i = 0; i < data.length; i++) {
    result = document.createElement('div');
    result.classList.add('card');
    result.innerHTML = data[i].content;
    boardData.appendChild(result);
  }
}

function loadData() {
  const request = new XMLHttpRequest();
  request.onload = () => {
    if (request.status >= 200 && request.status < 400) {
      const json = JSON.parse(request.response);
      showMessage(json);
    } else {
      console.log(request.status);
    }
  };
  request.onerror = () => {
    console.log('error');
  };
  request.open('GET', 'https://lidemy-book-store.herokuapp.com/posts?_limit=20&_sort=id&_order=desc', true);
  request.send();
}

// ----- 程式開跑 -----

// loading
loadData();

btn.addEventListener('click', (e) => {
  const requestPost = new XMLHttpRequest();
  e.preventDefault();
  requestPost.open('POST', 'https://lidemy-book-store.herokuapp.com/posts', true);
  requestPost.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  requestPost.send(`content=${newData.value}`);

  // 刷新頁面
  const newRequest = new XMLHttpRequest();

  // loading
  loadData(newRequest);
  newData.value = '';
});
