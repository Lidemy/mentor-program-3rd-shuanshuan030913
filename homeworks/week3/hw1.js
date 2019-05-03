function stars(n) {
  const result = [];
  if (!(n >= 1 && n <= 30)) return '';
  for (let i = 1; i <= n; i++) {
    result.push('*'.repeat(i));
  }
  return result;
}

console.log(stars(1));
console.log(stars(3));
console.log(stars(6));

module.exports = stars;
