function reverse(str) {

  let newWord = '';

  for (let i = str.length - 1; i >= 0; i--) {
    newWord += str[i];
  }

  console.log(newWord);
  
}

reverse('yoyoyo');
reverse('1abc2');
reverse('1,2,3,2,1');
