function checkCardNumber(nstr) { // 13 <= nstr <= 16
	// цифры от 0 до 9
    // проверка номера кредитной карты
    nstr = nstr.toString(10);
    n = nstr.length;
    var S = 0;
    var S1 = 0;
    var S2 = 0;
    var a = 0;
    var b = 0;
    var c = 0;
    var PP = "";
    var QQ = "";

    if (n < 13 || n > 16){
    	return ("Ошибка");
    }

    if (n % 2 == 0){
    	do{
    		mm = nstr.charAt(a) * 2;
    		b = a + 1;
    		jj = nstr.charAt(b);
    		if(mm > 9){
    			K = mm.toString(10);
    			mm = K;
    			c = mm.charAt(0) * 1 + mm.charAt(1) * 1;
    			mm = c;
    		}
    		K = mm.toString(10);
    		PP = PP + K;
    		QQ = QQ + jj;
    		a = a + 2;
    		n = n - 2;
    	}while(n > 0);
    	a = PP.length;
    	do{
    		S1 = S1 + PP.charAt(a) * 1;
    		a--;
    	}while(a > -1);
    	b = QQ.length;
    	do{
    		S2 = S2 + QQ.charAt(b) * 1;
    		b--;
    	}while(b > -1);
    	S = S + S1 + S2;
    	if (S % 10 == 0){
    		return "true";
    	}else{
    		return "false";
    		}
    }

    if (n % 2 == 1){
    	do{
    		a = b + 1;
    		mm = nstr.charAt(a) * 2;
    		jj = nstr.charAt(b);
    		if(mm > 9){
    			K = mm.toString(10);
    			mm = K;
    			c = mm.charAt(0) * 1 + mm.charAt(1) * 1;
    			mm = c;
    		}
    		K = mm.toString(10);
    		PP = PP + K;
    		QQ = QQ + jj;
			b = b + 2;
    		n = n - 2;
    	}while(n > 0);
    	a = PP.length;
    	do{
    		S1 = S1 + PP.charAt(a) * 1;
    		a--;
    	}while(a > -1);
    	b = QQ.length;
    	do{
    		S2 = S2 + QQ.charAt(b) * 1;
    		b--;
    	}while(b > -1);
    	S = S1 + S2;
    	if (S % 10 == 0){
    		return "true";
    	}else{
    		return "false";
    		}
    }
}

module.exports = checkCardNumber;