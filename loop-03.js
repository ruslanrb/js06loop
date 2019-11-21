function gcd(m,n) {
	var res;
	// напишите код нахождения наибольшего общего делителя
if (m == n){
	return m;
}
if (m == 0 || n == 0){
	return 0;
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
	return res;
}

module.exports = gcd;