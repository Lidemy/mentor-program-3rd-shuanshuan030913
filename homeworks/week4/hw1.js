const request = require('request');

request(
  'https://lidemy-book-store.herokuapp.com/books?_limit=10',
  (error, response, body) => {
    const json = JSON.parse(body);
    for (let i = 0; i < json.length; i++) {
      console.log(`${json[i].id} ${json[i].name}`);
    }
  },
);
