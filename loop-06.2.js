function expDiff(x) {
		var k = 2;
		var term = 0;
		var xInDegree = x;
		var factorial = 1;
		var summ = 1 + x;
		var i = 2;
		var check = true;
		while (check === true) {
				while (i <= k) {
						xInDegree = xInDegree * x;
						factorial = factorial * i;
						i++;
				}
				k++;
				i = k;
				term = xInDegree / factorial;
				summ = summ + term;
				if (term < 0)
						term = term * -1;
				if (term < 0.0001)
						check = false;
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