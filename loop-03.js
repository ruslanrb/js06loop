// напишите код нахождения наибольшего общего делителя
//node loop-03.js
//function gcd(m,n) {
	//var res;
	m = 30
	n = 18
	while (m != 0 & n != 0 ){
		if (m > n) {
			m = m % n
		}
		else {
			n = n % m
			}
	}
	//return res;
	console.log("10")
//}

//module.exports = gcd;
