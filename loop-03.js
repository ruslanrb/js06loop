function gcd(m,n) {
	var res;
	let a;
	let b;
	// напишите код нахождения наибольшего общего делителя
	do {
		a=Math.abs(m);
		b=Math.abs(n);
			if (m==0 || n==0)
			{
			return("0")
			}
			if (a>b)
			{
				m=a-b;
			}
			if (b>a)
			{
				n=b-a
			}
			if (b==a)
			{
				res=a;	
				return res;
			}
}
	while ((a>b) || (a<b))
}	
	
module.exports = gcd;