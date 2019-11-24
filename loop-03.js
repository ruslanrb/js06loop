function gcd(m,n) {
	var res;
	let a;
	let b;
	
	do {
	a=Math.abs(n);
	b=Math.abs(m);
		
		if (a>b){
			n=a-b
		}
		if (a<b){
			m=b-a
		}
		if (a==b){
		res=a;
		return res;}
}
while ((b>a) || (b<a))
}
	
	
module.exports = gcd;