const request = new XMLHttpRequest();
const boardData = document.querySelector('.board__data');
const newData = document.querySelector('.form__textarea');
const btn = document.querySelector('.form__btn');
let result;

function returnMessage(data) {
  // 清除重 load
  boardData.innerHTML = '';
  for (let i = 0; i < data.length; i++) {
    result = document.createElement('div');
    result.classList.add('card');
    result.innerHTML = data[i].content;
    boardData.appendChild(result);
  }
}

function loadData(req) {
  req.onload = () => {
    if (req.status >= 200 && req.status <= 400) {
      const json = JSON.parse(req.response);
      returnMessage(json);
    } else {
      console.log(req.status);
    }
  };
  req.onerror = () => {
    console.log('error');
  };
  req.open('GET', 'https://lidemy-book-store.herokuapp.com/posts?_limit=20', true);
  req.send();
}

// ----- 程式開跑 -----

// loading
loadData(request);

btn.addEventListener('click', (e) => {
  e.preventDefault();
  request.open('POST', 'https://lidemy-book-store.herokuapp.com/posts', true);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  request.send(`content=${newData.value}`);

  // 刷新頁面
  const newRequest = new XMLHttpRequest();

  // loading
  loadData(newRequest);
  newData.value = '';
});
