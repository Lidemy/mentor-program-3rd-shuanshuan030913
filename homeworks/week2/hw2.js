function capitalize(str) {

  if (str.charCodeAt(0) > 122) {
    return str;
  }
  
  if (str.charCodeAt(0) >= 97) {

    const firstLetter = String.fromCharCode(str.charCodeAt(0) - 32);
    let lastLetter = '';
    for (let i = 1; i < str.length; i++) {
      lastLetter += str[i];
    }

    return firstLetter + lastLetter;
  }

  return str;

}

console.log(capitalize('nick'));
console.log(capitalize('Nick'));
console.log(capitalize(',hello'));
