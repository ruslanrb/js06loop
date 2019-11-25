function checkCardNumber(nstr) {
    // проверка номера кредитной карты
    let a = 0, b = 0, num, j = 0;

    for (let i = 0; i < nstr.length; i++){
    
    if (nstr[i] != " "){
    	num = parseInt(nstr[i]);
    	if (j % 2 == 0){
    		num *= 2;
    		if (num >= 10){
    			a += (num % 10) + Math.floor(num / 10);
    			}
    		else{
    			a += num;
    			}
    	}
    		else{
    			b += num;
    		}
    	j++;
    	}
    }
  if ((a + b) % 10 == 0){
    return true;
    }
   else{
    return false;
    }
}

module.exports = checkCardNumber;
