function add(a, b) {
  let result = '';
  let longLength = '';
  let a2 = a;
  let b2 = b;
  let plus = '0';
  if (a.length >= b.length) {
    longLength = a.length;
    a2 = a;
    b2 = '0'.repeat(a.length - b.length) + b;
  } else {
    longLength = b.length;
    a2 = '0'.repeat(b.length - a.length) + a;
    b2 = b;
  }
  for (let i = longLength - 1; i >= 0; i--) {
    if (Number(plus) + Number(a2[i]) + Number(b2[i]) < 10) {
      result = Number(plus) + Number(a2[i]) + Number(b2[i]) + result;
      plus = '0';
    } else {
      result = String(Number(plus) + Number(a2[i]) + Number(b2[i]))[1] + result;
      plus = '1';
    }
  }
  if (plus === '1') {
    result = 1 + result;
  }
  return result;
}

module.exports = add;
