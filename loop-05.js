function checkCardNumber(nstr) {
    // проверка номера кредитной карты
var sum = 0;
var sum2 = 0;
var a;
var b;
if (nstr.length >= 13 && nstr.length <= 16){
	for (var i = nstr.length-2; i>=0; i = i-2) {
		a = parseInt(nstr[i]*2);
		if(a > 9){
			sum = sum + a%10 + 1;
		}else{
		sum = sum + a;
	}
	}
	for (var i = nstr.length-1; i>=0; i = i-2) {
				sum2 = sum2 + parseInt(nstr[i]);
	}
	if ((sum + sum2) % 10 != 0){
		return false;
	}else{
		return true;
	}
}else{
	return "error";
}

}

module.exports = checkCardNumber;
