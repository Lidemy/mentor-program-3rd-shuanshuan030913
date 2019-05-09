const request = require('request');

request.get(
  'https://api.twitch.tv/kraken/games/top?client_id=j2bw85kq79noiaxesfmbp0tfdltvr7',
  (error, response, body) => {
    const json = JSON.parse(body).top;
    for (let i = 0; i < json.length; i++) {
      console.log(`${json[i].game._id} ${json[i].game.name}`);
    }
  },
);
