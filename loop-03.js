function gcd(m, n) {
  while(n!== 0) n = m %(m = n);
  return m;
}
module.exports = gcd;
