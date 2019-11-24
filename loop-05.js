function checkCardNumber(nstr) {
    // проверка номера кредитной карты
	var nstr2 = nstr;
	var Sum = 0;
	var lenghtNstr = 0; 

	while (nstr2 > 0) {
    	nstr2 = (nstr2 - nstr2 % 10) / 10;
    	lenghtNstr += 1;
    }

	if ((lenghtNstr>=13) && (lenghtNstr<=16)) {
		for (var i=0; i<lenghtNstr; i++) {
			var cardNum = parseInt(nstr[i]);
			if ((lenghtNstr - i) % 2 === 0) { 
				cardNum = cardNum * 2;

				if (cardNum > 9) {
					cardNum = cardNum - 9;
				}
			}
			Sum += cardNum;
		}
	}
	
	if (Sum % 10 === 0) {
    	return true;
    } 
	else {
    	return false;
	}
}

module.exports = checkCardNumber;