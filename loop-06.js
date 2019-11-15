function expDiff(x) {
    // модуль разности между стандартной экспонентой и приближением в виде ряда
    var slag       = x;
    var factorial  = 1;
    var slagaemoe  = 322228;
    var summa      = 1 + x;
    var k          = 2;

    while (slagaemoe > 0.0001) {
        for(var i = 2; i <= k; i++) {
		    slag *= x;
    	    factorial *= i;
    	}
    	k++;
        slagaemoe = slag / factorial;
        summa += slagaemoe;
    	slag = x;
        factorial = 1;
        if (slagaemoe < 0)
            slagaemoe = slagaemoe * -1;
            
    }
    if (Math.exp(x) - summa > 0) 
        return Math.exp(x) - summa;
    else
        return summa - Math.exp(x);
}
module.exports = expDiff;
/*
console.log(expDiff(-3))
console.log(expDiff(-2))
console.log(expDiff(-1))
console.log(expDiff( 0))
console.log(expDiff( 1));
console.log(expDiff( 2));
console.log(expDiff( 3))
console.log(expDiff( 4))
*/