function expDiff(x) {
        var k = 2;
        var xInDegree = x;
        var factorial = 1;
        var term = 0;
        var check = true;
        var summ = 1 + x;
        while (check === true) {
                for(var i = 2; i <=k; i++) {
                        xInDegree = xInDegree * x;
                        factorial = factorial * i;
                }
                term = xInDegree / factorial;
                summ = summ + term;
                if (term < 0)
                        term = term * -1;
                if (term < 0.0001)
                        check = false;
                k++;
                xInDegree = x;
                factorial = 1;
        }
        if (Math.exp(x) >= summ)
                return Math.exp(x) - summ;
        else
                return summ - Math.exp(x);
}
module.exports = expDiff;
/*
console.log("x =-1:  ", expDiff(-1))
console.log("x = 0:  ", expDiff(0));
console.log("x = 1:  ", expDiff(1));
console.log("x = 2.5:", expDiff(2.5))
console.log("x = 2:  ", expDiff(2));
console.log("x = 3:  ", expDiff(3))
*/
