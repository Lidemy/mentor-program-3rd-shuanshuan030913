const request = require('request');
const process = require('process');

function outBook(first, second, newName) {
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
  if (first === 'delete') {
    request.delete(
      `https://lidemy-book-store.herokuapp.com/books/${second}`,
      (error, response, body) => {
        console.log(body);
      },
    );
  }
  if (first === 'create') {
    request.post(
      {
        url: 'https://lidemy-book-store.herokuapp.com/books',
        form: {
          name: second,
        },
      },
      (error, response, body) => {
        const json = JSON.parse(body);
        console.log(`${json.id} ${json.name}`);
      },
    );
  }
  if (first === 'update') {
    request.patch(
      {
        url: `https://lidemy-book-store.herokuapp.com/books/${second}`,
        form: {
          name: newName,
        },
      },
      (error, response, body) => {
        const json = JSON.parse(body);
        console.log(`${json.id} ${json.name}`);
      },
    );
  }
}

outBook(process.argv[2], process.argv[3], process.argv[4]);
