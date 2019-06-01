const table = document.querySelector('table');
const InputCal = document.getElementById('InputCal');

let NumText;
let CalText;
let AllNum;
let las;
let eq;
let Ans;
let point;
let restart;
let Total;

// 字串結算用 function
function evil(str) {
  const Fn = Function;
  return new Fn(`return ${str}`)();
}

table.addEventListener('click', (e) => {

  // 判斷有無小數
  if (InputCal.value.indexOf('.') === 1) {
    point = true;
  } else {
    point = false;
  }

  // 輸入數字
  if (e.target.classList[0] === 'NumberButton') {
    NumText = e.target.innerHTML;

    // if 初始化 0 or 空值，則數字取代
    if (InputCal.value === '0' || InputCal.value === '') {
      
      // 小數點判斷
      if (NumText === '.') {
        InputCal.value = `0${NumText}`;
      } else {
        InputCal.value = NumText;
      }

    // if 有值，判斷是否為計算結果，是則重新輸入
    } else if (restart === true && NumText !== '.') {
      InputCal.value = NumText;

    // 如果重新計算第一個點選小數點
    } else if (restart === true && NumText === '.') {
      InputCal.value = `0${NumText}`;

    // 如果已經有小數點又按下小數點
    } else if (point === true && NumText === '.') {
      NumText = '';

    // 如果字尾是運算式，小數點前要補零
    } else {
      if (!Number(InputCal.value.substr(InputCal.value.length - 1, 1)) && NumText === '.') {
        NumText = '0.';
      }
      InputCal.value += NumText;
    }
    restart = false;
  }


  // 輸入運算式
  if (e.target.classList[0] === 'CalButton') {

    CalText = e.target.innerHTML;
    AllNum = InputCal.value;
    las = AllNum.substring(AllNum.length - 1, AllNum.length);

    // 判斷字尾是否為數字，若不是數字，字尾改為最後一次按下的
    if (Number.isNaN(Number(las))) {

      InputCal.value = AllNum.substring(0, AllNum.length - 1) + CalText;

    // 字尾是數字，後可接標點符號
    // 如果剛算完算式要繼續算，Ans + 標點符號繼續算
    } else {
      restart = false;
      eq = AllNum.indexOf('=');
      Ans = AllNum.substring(eq + 1, AllNum.length);

      InputCal.value = Ans + CalText;

    }
  }

  // 結算
  if (e.target.id === 'TotalB') {

    restart = true;

    // 判斷最後一個字是否為數字
    AllNum = InputCal.value;
    las = AllNum.substring(AllNum.length - 1, AllNum.length);

    // 判斷結尾是否為數字
    if (Number.isNaN(Number(las)) === true) {

      Total = evil(AllNum.substring(0, AllNum.length - 1));
    } else {
      Total = evil(InputCal.value);
    }
    InputCal.value = `${InputCal.value} = ${Total}`;
  }
});

// 歸零 C 鍵

const zero = document.getElementById('zero');

zero.addEventListener('click', () => {
  InputCal.value = 0;
});
