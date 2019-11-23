function pyramid(n) {
	var res = ""

	for (var i = 0; i < n; i++) {
		for (var k = 1; k <= n-i-1; k++) {
			res += " "
		}
		for (var x = 1; x <= (i*2)+1; x++) {
			res += "#"
		}
		if (i < n-1) {res+="\n"}
	}

	return res
}

module.exports = pyramid;