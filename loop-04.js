var print = require('./printModule.js');

function pyramid(n) {
	var res = ""

	for (var i = 0; i < n; i++) {
		for (var k = 1; k <= n-i-1; k++) {
			res+=" "
		}
		for (var x = 1; x <= (i*2)+1; x++) {
			res+="#"
		}
		res+="\n"
	}

	return res
}

print(pyramid(30))

module.exports = pyramid;
