function gcd(m,n) {
	var res;
	// напишите код нахождения наибольшего общего делителя
	if ((m===0)||(n===0)){
		return "ААААААА! Обнаружен НОООЛЬ!";
	}
	else {
		while(m!=n){
		m=Math.abs(m)
		n=Math.abs(n)
		if (m>n) {
			m=m-n
		}
		else if (m<n){
			n=n-m}
		}
	res=m
	return res;
}
}

module.exports = gcd;
