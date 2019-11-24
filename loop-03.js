/*
Напишите функцию gcd(m, n), которая возвращает наибольший
общий делитель чисел m и n. Например, gcd(24,18)должно
быть равно 6. 
*/
function gcd(m,n) {
	m = Math.abs(m);
	n = Math.abs(n);
	if (m == 0)
		return n;

	while (n != 0) {
		if (m > n) 
			m = m - n;
		else
			n = n - m;
	}
	return m;
}

module.exports = gcd;