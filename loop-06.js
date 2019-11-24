function expDiff(nstr) {
    // модуль разности между стандартной экспонентой и приближением в виде ряда
function checkCardNumber(nstr) {
// проверка номера кредитной карты
 
let sum = 0, i;
      for (i = nstr.length-1; i>=0; i -= 2) {
		k = nstr[i];
		sum += parseInt(k);
	}
	
return (sum % 10 === 0);
}

module.exports = checkCardNumber;

}

module.exports = expDiff;


