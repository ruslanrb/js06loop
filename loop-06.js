factorial = require('./modules.js')["factorial"]
abs = require('./modules.js')["abs"]
pow = require('./modules.js')["pow"]

function expDiff(x) {
	var def = Math.exp(x);
	var n = 1;
	var digit = 1;

	while (true) {
		term = pow(x, n)/factorial(n)

		if (abs(term) >= 0.0001) {
			digit += term
		} else {
			return abs(digit - def)
		}

		n += 1
	}
}

module.exports = expDiff;