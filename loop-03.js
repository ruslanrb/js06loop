function gcd(m,n) {
	var res;
	// напишите код нахождения наибольшего общего делителя
    while (m != 0 && n != 0) {
          if (m > n){          
          	m = m - n;        
          }
          else {
          	n = n - m;
          }
    res = m + n;
	return res;
}

module.exports = gcd;
