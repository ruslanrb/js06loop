function gcd(m,n) {
	// напишите код нахождения наибольшего общего делителя

	for ( var m = arguments[ 0 ], i = 1; i < arguments.length; i++ ) {
		var n = arguments[ i ];
		while ( m && n ) {
			m > n ? m %= n : n %= m;
		}
    m += n;
	}
	return m;
	}

module.exports = gcd;
