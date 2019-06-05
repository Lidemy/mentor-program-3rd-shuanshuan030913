const request = new XMLHttpRequest();
const main = document.querySelector('main');
let result;

function returnStream(data) {
  data.map((i) => {
    result = document.createElement('div');
    result.classList.add('card');
    result.innerHTML = `
      <div class="card__preload" style="background: url(${i.preview.medium}) center center no-repeat; background-size: cover"></div>
      <div class="card__info">
        <span class="card__info--logo">
          <img src="${i.channel.logo}">
        </span>
        <dl class="card__info--text">
          <dt class="title">${i.channel.status}</dt>
          <dd class="author">${i.channel.display_name}</dd>
        </dl>
      </div>`;
    main.appendChild(result);
    return i;
  });
}

request.onload = () => {
  if (request.status >= 200 && request.status <= 400) {
    const json = JSON.parse(request.response);
    returnStream(json.streams);
  } else {
    alert('系統不穩定，請再試一次');
  }
};
request.onerror = () => {
  alert('系統不穩定，請再試一次');
};
request.open('GET', 'https://api.twitch.tv/kraken/streams/?game=League%20of%20Legends&limit=20', true);
request.setRequestHeader('Client-ID', 'j2bw85kq79noiaxesfmbp0tfdltvr7');
request.send();
