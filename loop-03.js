var print = require('./printModule.js');

function gcd(m,n) {

	if (m == n) {
		return m
	}

	while (m != n) {
		k = m
		m = n

		if (k > n) {
			n = k - n
		}
		else {
			n = n - k
		}
	}

	return m;
}

// console.log(gcd(66, 42))

module.exports = gcd;
