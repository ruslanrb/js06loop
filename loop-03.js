function gcd(m,n) {
	var res;
	// напишите код нахождения наибольшего общего делителя
	do {
			if (Math.abs(m)>Math.abs(n))
			{
				m=Math.abs(m)-Math.abs(n);
			}
			if (Math.abs(n)>Math.abs(m))
			{
				n=Math.abs(n)-Math.abs(m)
			}
			if (Math.abs(n)==Math.abs(m))
			{
				res=Math.abs(m);	
				return res;
			}
}
	while ((Math.abs(m)>Math.abs(n)) || (Math.abs(m)<Math.abs(n)))
}	
	
module.exports = gcd;
