const request = new XMLHttpRequest();
const body = document.querySelector('body');
const button = document.querySelector('.lottery__button');
const lotteryResult = document.querySelector('.lottery__result');
const resultText = document.querySelector('.lottery__result--p');

function prizeResult(prize) {

  button.addEventListener('click', () => {

    button.style.display = 'none';
    lotteryResult.style.display = 'block';

    if (prize === 'FIRST') {
      body.classList = 'first';
      resultText.innerHTML = '恭喜你中頭獎了！日本東京來回雙人遊！';
    } else if (prize === 'SECOND') {
      body.classList = 'second';
      resultText.innerHTML = '二獎！90 吋電視一台！';
    } else if (prize === 'THIRD') {
      body.classList = 'third';
      resultText.innerHTML = '恭喜你抽中三獎：知名 YouTuber 簽名握手會入場券一張，bang！';
    } else {
      body.classList = 'none';
      resultText.innerHTML = '銘謝惠顧';
    }
  });
}

function error() {
  button.addEventListener('click', () => {
    alert('系統不穩定，請再試一次');
    window.location.replace(window.location.href);
  });
}

request.onload = () => {
  if (request.status >= 200 && request.status <= 400) {
    const json = JSON.parse(request.response);
    prizeResult(json.prize);
  } else {
    error();
  }
};
request.onerror = () => {
  error();
};
request.open('GET', 'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery', true);
request.send();
