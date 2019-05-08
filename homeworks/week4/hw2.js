const request = require('request');
const process = require('process');

function outBook(first, second) {
  if (first === 'list') {
    request(
      'https://lidemy-book-store.herokuapp.com/books?_limit=19',
      (error, response, body) => {
        const json = JSON.parse(body);
        for (let i = 0; i < json.length; i++) {
          console.log(`${json[i].id} ${json[i].name}`);
        }
      },
    );
  }
  if (first === 'read') {
    request(
      `https://lidemy-book-store.herokuapp.com/books/${second}`,
      (error, response, body) => {
        const json = JSON.parse(body);
        console.log(`${json.id} ${json.name}`);
      },
    );
  }
}

outBook(process.argv[2], process.argv[3]);
