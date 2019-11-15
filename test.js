//попытки исправить ошибки 6-го задания
var watch = []

function expDiff(x) {
    // модуль разности между стандартной экспонентой и приближением в виде ряда
    var slag       = x;
    var saveXvalue = x;
    var factorial  = 1;
    var slagaemoe  = 322228;
    var summa      = 1 + x;
    var k          = 2;

    while (slagaemoe > 0.00001) {
        for(var i = 2; i <= k; i++) {
		    slag *= slag;
    	    factorial *= i;
    	}
    	k++;
        slagaemoe = slag / factorial;
        slagaemoe = +slagaemoe.toFixed(6)
        summa += slagaemoe;
    	slag = saveXvalue;
        factorial = 1;
        watch[0] = 1;
        watch[1] = saveXvalue;
        if ((k < 10)&&(slag === 1)) {
        		watch[k] = slagaemoe;
        		console.log(watch[k-2])
        }
        if (slagaemoe < 0)
            slagaemoe = slagaemoe * -1;
            
    }
    /*
    if (Math.exp(x) - summa > 0) 
        return Math.exp(x) - summa;
    else
        return summa - Math.exp(x);
    */
    return summa;
}
module.exports = expDiff;
/*
console.log(watch[0])
console.log(watch[1])
console.log(watch[2])
console.log(watch[3])
console.log(watch[4])
console.log(watch[5])
console.log(watch[6])
console.log(watch[7])
console.log(watch[8])
console.log(watch[9])
console.log(watch[10])
*/

//console.log(expDiff(-2))
//console.log(expDiff(-1))
//console.log(expDiff( 0))
console.log(expDiff( 1));
console.log(expDiff( 2));
console.log(expDiff( 3))
console.log(expDiff( 4))	