function gcd(m,n) {
	var res;
	if (m<0){
		m=m*(-1);
	}
	if (n<0){
		n=n*(-1)
	}
	// напишите код нахождения наибольшего общего делителя
	do {
			if (m>n)
			{
				m=m-n;
			}
			if (n>m)
			{
				n=n-m
			}
			if (n==m)
			{
				res=m;	
				return res;
			}
}
	while ((m>n) || (m<n))
}	
	
module.exports = gcd;
