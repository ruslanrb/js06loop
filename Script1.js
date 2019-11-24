function luhnAlgorithm(nstr) {
    // проверка номера кредитной карты
    var lengthOfNstr = 0;
    var nstrClone1 = nstr;
    var checkSum = 0;
    while (nstrClone1 > 0) {
    	nstrClone1 = (nstrClone1 - nstrClone1 % 10) / 10;
    	lengthOfNstr += 1;
    }
    if ((lengthOfNstr >= 13) && (lengthOfNstr <= 16)) {
	    for(var i = 0; i < lengthOfNstr; i++) {
	    	var x = nstr % 10; // цифра под индексом i
            var y = x * 2;
	     	if ((i + 1) % 2 === 1) // 
	    		checkSum += x;
	    	else
	    		if (y > 9) 
	    			checkSum += y % 10 + (y - y % 10) / 10;
	    		else
	    			checkSum += y;
	    	nstr = (nstr - x) / 10;
	    }
	}
	else
		return false;
	if (checkSum % 10 === 0)
    	return true;
    else
    	return false;
}


module.exports=luhnAlgorithm