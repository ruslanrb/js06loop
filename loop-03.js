abs = require('./modules.js')["abs"];

function gcd(m,n) {
	m = abs(m);
	n = abs(n);

	if (m == n) {
		return m;
	}

	while (m != n) {
		k = m;
		m = n;

		if (k > n) {
			n = k - n;
		}
		else {
			n = n - k;
		}
	}

	return m;
}

module.exports = gcd;
