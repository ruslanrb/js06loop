// напишите код нахождения наибольшего общего делителя
function gcd(m,n) {
	var res;
	while(m != 0 && n != 0){
		if (m > n){
			m %= n;
		}
		else{
			n %= m;
		}
	}

	res = m + n;
	return res;
}

module.exports = gcd;
