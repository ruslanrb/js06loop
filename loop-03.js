function gcd(m,n) {
	var res;
	// напишите код нахождения наибольшего общего делителя
	if (m>n){
		m=m-n;
	}
	if (n>m){
		n=n-m
	}
	if (n==m);
		res=m;	
	return res;
}

module.exports = gcd;
