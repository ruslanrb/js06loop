function gcd(m,n) {
	var res;
	var a;
	// напишите код нахождения наибольшего общего делителя
	if(m == n){
		res = m;
		return res;
	}	
	while(m != n){
		if(m > n){
			m = m - n;
		}else{
			n = n - m;
		}
		res = m;
	}
	return res;
}

module.exports = gcd;
