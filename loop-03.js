function gcd(m,n) {
	m = abs(m);
	n = abs(n);
	if (m == n) {
		return m;
	}
	while (m != n) {
		l = m;
		m = n;
		if (l > n) {
			n = l - n;
		}
		else {
			n = n - l;
		}
	}
	return m;
}
module.exports = gcd;
