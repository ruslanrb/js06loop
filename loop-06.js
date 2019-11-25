function expDiff(x) {
    var slag = x;
    var factorial = 1;
    var term = 322228;
    var summa = 1 + x;
    var n = 2;

    while (term > 0.0001) {
        for(var i = 2; i <= n; i++) {
		    slag *= x;
    	    factorial *= i;
    	}
    	n++;
        term = slag / factorial;
        summa += term;
    	slag = x;
        factorial = 1;
        if (term < 0)
            term = term * -1;
    }
    return Math.abs(Math.exp(x) - summa)
}
module.exports = expDiff;
