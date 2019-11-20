function gcd(m,n) {
	var res = 1;
	var max = 1;
	var p;

    if (m == 0 || n == 0 ) {
    	return 0;
    }

    if (m < 0) {
    	m = -m;
    }
    if (n < 0) {
    	n = -n;
    }


	if (m >= n) {
		p = n
	}else{
		p = m
	}
	
	while (res <= p) {
		if ((m % res == 0) && (n % res == 0)) {
			max = res;
		}
		res++
	}

	return max;
}

module.exports = gcd;
