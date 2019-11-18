function checkCardNumber(nstr) {
	var sum = 0

	for (var i = nstr.length - 1; i >= 0; i-=2) {
		sum += parseInt(nstr[i])
	}

	for (var i = nstr.length - 2; i >= 0; i-=2) {
		k = parseInt(nstr[i])*2

		if (k > 9) {
			sum += 1 + (k%10)
		}
		else {sum+=k}
	}

	if (sum % 10 != 0) {return false}
	else {return true}
}

module.exports = checkCardNumber;