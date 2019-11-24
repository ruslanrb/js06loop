function gcd(m,n) {
	// напишите код нахождения наибольшего общего делителя
if (m == n){
	return m;
}
if (m == 0 && n == 0){
	return 0;
}
if (m == 0 && n>0 || n == 0 && m<0){
	return n;
}else{
	if (n == 0 && m>0 || m == 0 && n<0){
		return m;
	}
}
if (m == 1 || n == 1){
	return 1;
}
if (m < 0){
	m = -m;
}
if (n < 0){
	n= -n;
}
while (m > n || n > m){
	if (m>n){
		m = m-n;
	}
	if (n>m){
		n = n-m;
	}
	if (m==n){
		return m;
	}
}
	return m;
}

module.exports = gcd;