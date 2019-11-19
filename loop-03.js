function gcd(m,n) {
	// напишите код нахождения наибольшего общего делителя
	while (m!=0 && n!=0) 
	{ if (m>=n) m = m%n;
		else n = n % m;}
	if (m==0) console.log(n);
			else console.log (m);
}

module.exports = gcd;
