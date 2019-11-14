function gcd(m,n) {
	var i = 0;
	var res;
	// напишите код нахождения наибольшего общего делителя
	if (m == n){
		return m;
	}
	if (m == 0 || n == 0){
		return 0;
	}
	if (m == 1 || n == 1 || m - n == 1 || n - m == 1){
		return 1;
	}
	if (m % n == 0){
		return n;
	}
	if (n % m == 0){
		return m;
	}
	do{
		if(m > n){
			m = m - n;
		}
		if(n > m){
			n = n - m;
		}
		if(n == m){
			return n;
		}
	}while(n > m || n > -1 || m > n || m > -1);
	return 1;
	return res;
}

module.exports = gcd;
