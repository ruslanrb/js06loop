var print = require('./printModule.js');

function checkCardNumber(nstr) {
	var evenSum = 0
	var unevenSum = 0
	print(nstr)

	for (var i = nstr.length-1; i >= 0; i--) {
		if (nstr[i] != " ") {
			if (i % 2 == 0) {
				k = String(nstr[i]*2)

				for (var x = 0; x < k.length; x++) {
					evenSum += (parseInt(k[x]))
				}
			}
			else {
				unevenSum += parseInt(nstr[i])
			}
		}
	}
	
	if ((evenSum + unevenSum) % 10 == 0) {
		return true
	}
	else return false

}

// print(checkCardNumber("4372282244310005"))

module.exports = checkCardNumber;
