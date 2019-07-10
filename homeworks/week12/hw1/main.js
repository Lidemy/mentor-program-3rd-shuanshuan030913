// Get the modal
const loginModal = document.querySelector('#loginModal');

const btn = document.querySelector('.login-btn');

const login = document.querySelector('.login-form');
const signUp = document.querySelector('.signup-form');
const toggle = document.querySelector('.toggle-form');
const span = document.querySelector('.close');


btn.addEventListener('click', () => {
  if (btn.innerHTML === '會員登入') {
    loginModal.style.display = 'block';
  }
});

toggle.addEventListener('click', () => {
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

span.addEventListener('click', () => {
  loginModal.style.display = 'none';
});


// 子留言開關
const boardData = document.querySelector('.board__data');

boardData.addEventListener('click', (e) => {
  if (e.target.className.indexOf('review-btn') >= 0) {
    e.target.parentNode.style.display = 'none';
    e.target.parentNode.parentNode.lastChild.style.display = 'flex';
  }
});
