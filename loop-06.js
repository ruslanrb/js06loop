function expDiff(x) {
    // модуль разности между стандартной экспонентой и приближением в виде ряда
    var e = 1;
    var n = 1;
    var nn = 1;
    do{
    e = e + ((Math.pow(x, n))/nn);
    if((Math.pow(x, n))/nn < 0.0001){
    	break;
    }
    n = n + 1;
    nn = nn * n;
	}while(n < Number.MAX_VALUE);
	return (Math.exp(x) - e);
}

module.exports = expDiff;
