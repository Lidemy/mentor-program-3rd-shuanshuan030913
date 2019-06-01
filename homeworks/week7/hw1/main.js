/* eslint-disable no-unused-expressions */
/* eslint-disable no-alert */

// 禁位元運算
/* eslint-disable no-bitwise */

// 全域變數
const bg = document.querySelector('body');
const h1 = document.querySelector('h1');
const mainBlock = document.querySelector('.main');
let loop = true;
let timeScore;
const arr = [];
let result;
let btn;

// 定義隨機色碼
function getColor() {
  const letters = '0123456789ABCDEF'.split('');
  let colortag = '#';
  for (let i = 0; i < 6; i++) {
    colortag += letters[Math.floor(Math.random() * 16)];
  }

  // 判斷顏色深淺
  const c = colortag.substring(1); // strip #
  const rgb = parseInt(c, 16); // convert rrggbb to decimal
  const r = (rgb >> 16) & 0xff; // extract red
  const g = (rgb >> 8) & 0xff; // extract green
  const b = (rgb >> 0) & 0xff; // extract blue

  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

  (luma < 120) ? h1.style.color = '#fff' : h1.style.color = '#332411';

  return colortag;
}


// 定義隨機秒數
function getRandomInt(min, max) {
  return (Math.random() * (max - min) + min) * 1000;
}

// 定義變色 & 變色時間擷取
let timeColor;
function colorChange() {
  bg.style.background = getColor();
  timeColor = (new Date()).getTime();
}

// 隨機變色
let myColorClock;
function RandomColor() { myColorClock = window.setTimeout(colorChange, getRandomInt(1, 2)); }

// 重玩
function playAgain(e) {
  e.stopPropagation();
  clearTimeout(myColorClock);

  bg.style.background = '';
  h1.style.color = '#332411';
  if (mainBlock.contains(document.querySelector('.leader-board'))) {
    mainBlock.removeChild(document.querySelector('.leader-board'));
  }
  loop = true;
  RandomColor();
}


// 定義遊戲內容
function gameStart() {
  if (loop) {
    loop = false;

    const timeClick = (new Date()).getTime();
    timeScore = ((timeClick - timeColor) / 1000).toFixed(2);

    if (bg.style.background !== '') {

      // 暫存資料
      // 0. 先刪掉空值
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '') {
          arr.splice(i, 3);
        }
      }
      // 1. 存成 array並排序
      arr.push(timeScore);
      arr.sort();

      if (timeScore < 0.1) {
        alert(`我知道你是用矇的！你的成績： ${timeScore} 秒`);
      } else if (timeScore < 0.2) {
        alert(`按得好快！你的成績： ${timeScore} 秒`);
      } else if (timeScore < 0.4) {
        alert(`不簡單了！你的成績： ${timeScore} 秒`);
      } else if (timeScore < 0.8) {
        alert(`反射弧有點長呢？你的成績： ${timeScore} 秒`);
      } else if (timeScore < 1.5) {
        alert(`哪裡卡到了嗎 (⊙＿⊙) 你的成績： ${timeScore} 秒`);
      } else if (timeScore < 5) {
        alert(`...是睡著了吧？ 你的成績： ${timeScore} 秒`);
      } else {
        alert(`某種程度上，你的反應力也是世界級的 ╮(￣▽￣)╭ 你的成績： ${timeScore} 秒`);
      }
    } else {
      clearTimeout(myColorClock);
      alert('還沒變色，也太急了你<(￣︶￣)>');
    }

    // 產生重玩按鈕 + 紀錄排名
    result = document.createElement('div');
    result.classList.add('leader-board');

    // 2. 遊玩次數小於 3 後面補空值
    for (let j = 0; j < 3; j++) {
      if (!arr[j]) {
        arr[j] = '';
      }
    }

    result.innerHTML = `
      <div class="leader-board__list">
        <h3 class="leader-board__title">你的排行榜</h3>
        <ol>
          <li>${arr[0]}</li>
          <li>${arr[1]}</li>
          <li>${arr[2]}</li>
        </ol>
      </div>
      <div class="btn">
        <button>再玩一次</button>
      </div>
    `;
    document.querySelector('main').appendChild(result);

    // 重玩

    btn = document.querySelector('.btn');

    btn.addEventListener('click', playAgain);
  }
}
// ---------- 程式開跑 --------------

// 隨機變色
RandomColor();


// 滑鼠事件
bg.addEventListener('click', gameStart);

// 鍵盤事件
window.addEventListener('keydown', (e) => {
  if (e.code === 'Space') { gameStart(); }
  if (e.code === 'KeyR') { playAgain(e); }
});
