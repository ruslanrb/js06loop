function expDiff(nstr) {
    // модуль разности между стандартной экспонентой и приближением в виде ряда
    var e = 1; // счетчик 
    var x = nstr; // степень е
    var w = 1; // отношение степени и факториала
    var fac = 1; // факториал
    var exp = -1; // сумма
    while(w > 0.0001){
    	fac = 1;
    	x = 1;
    	// находение одного члена 
    	for (var i = 1; i < e; i++) {
    		x = x * nstr;
    		fac = fac * i;
    	}
    	exp = exp + w;
    	w = x / fac;
    	e++;
    }
    return(Math.exp(nstr) - exp);
}

module.exports = expDiff;
