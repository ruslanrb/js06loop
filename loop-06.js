factorial = require('./modules.js')["factorial"]
abs = require('./modules.js')["abs"]
pow = require('./modules.js')["pow"]
print = require('./modules.js')["print"]

function expDiff(x) {
	let n = 1;
	let digit = 1;
	let term = x

	while (abs(term) >= 0.0001) {
		digit += term;
		n += 1;	
		term = pow(x, n)/factorial(n);
	}

	return abs(Math.exp(x) - digit)
}

module.exports = expDiff;