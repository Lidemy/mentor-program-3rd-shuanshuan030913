/* eslint-disable no-alert */

const form = document.querySelector('.form');
const requireAns = document.querySelectorAll('.require');
const inputValue = document.querySelectorAll('.form__input');
let checkValue;
let formValue; // 傳遞資料用
let eachwarning;

// 如果必填沒有值，提交前擋下
function checkForm() {
  for (let i = 0; i < requireAns.length; i++) {
    if ((i !== 2 && !inputValue[i].value) || (i === 2 && !checkValue)) return false;
  }
  return true;
}

form.addEventListener('submit', (e) => {

  // 驗證表單

  if (!checkForm(e)) e.preventDefault();


  formValue = []; // 傳遞資料用

  // 選取 radio 的 value
  if (document.getElementById('formZero').checked) {
    checkValue = '從零到一基礎班';
  } else if (document.getElementById('improve').checked) {
    checkValue = '在職工程師加強班';
  } else {
    checkValue = '';
  }

  for (let i = 0; i < requireAns.length; i++) {

    // 如果有 warning 撤掉
    eachwarning = requireAns[i].querySelector('.warning');
    if (eachwarning) requireAns[i].removeChild(eachwarning);


    // -------- 判斷 input 有沒有值 ----------
    // 如果沒有
    if ((i !== 2 && !inputValue[i].value) || (i === 2 && !checkValue)) {

      // 反紅
      requireAns[i].classList.add('undo');

      // 必填
      const warning = document.createElement('div');
      warning.classList.add('warning');
      warning.innerHTML = '這是必填問題';
      requireAns[i].appendChild(warning);

    // 如果有
    } else {

      // 帶出資料
      formValue.push(inputValue[i].value);

    }
  }

  if (formValue.length >= 6) {

    formValue.splice(2, 1, checkValue);
    formValue.push(inputValue[6].value);
    console.log('表單結果', formValue);
    alert(`【表單結果】
電子郵件地址：${formValue[0]}
暱稱：${formValue[1]}
報名類型：${formValue[2]}
現在的職業：${formValue[3]}
怎麼知道這個計畫的：${formValue[4]}
是否有程式相關背景：${formValue[5]}
其他：${formValue[6]}`);
  }

});

// onChange 事件
let requireDiv;

form.addEventListener('input', (e) => {

  if (e.target.classList[0] === 'form__radio') {
    requireDiv = e.target.parentNode.parentNode.parentNode;
  } else {
    requireDiv = e.target.parentNode.parentNode;
  }

  eachwarning = requireDiv.querySelector('.warning');
  requireDiv.classList.remove('undo');
  if (eachwarning) requireDiv.removeChild(eachwarning);
});
