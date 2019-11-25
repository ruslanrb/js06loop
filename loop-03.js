var m = 1024;
var n = 24;
function gcd(m, n) {
	if (n > m) return gcd(n, m);
	if (!n) return m;
	return gcd(n, m % n);
}
console.log(gcd(m, n));
