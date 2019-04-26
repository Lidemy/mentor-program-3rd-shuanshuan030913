function printStars(n) {
  
  let str = '';

  for (let i = 1; i < 30 && i <= n; i++) {
    str += '*\n';
  }

  console.log(str);
  
}

printStars(1);
printStars(3);
printStars(6);
