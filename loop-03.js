print = require('./modules.js')["print"]

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

// print(gcd(66, 42))

module.exports = gcd;
