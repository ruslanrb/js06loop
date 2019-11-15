function gcd(m, n) {
  if(m==0 || n==0){
		return 0;
	}
	if(m==1 || n==1){
		return 1;
	}
  while(n!== 0) n = m %(m = n);
  return m;
}
module.exports = gcd;
