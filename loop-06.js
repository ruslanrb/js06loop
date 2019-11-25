function expDiff(a) {
    // модуль разности между стандартной экспонентой и приближением в виде ряда
    let exp = 0, i = 0;
    do{
    	if (i == 0){
    		exp += 1;
    	}
    	else{
    	if (abc((pow(a, i) / fact(i))) < 0.0001){
    		break;
    		}
    	else{
    		exp += pow(a, i) / fact(i);
    		}
        }
    i++;
   }while(true);
   return Math.exp(a) - abc(exp);
}

function pow(n, a){
	let num = 1;
	for (let i = 0; i < a; i++){
		num *= n;
	}
	return num;
}

function fact(n){
	let a = 1;
	for (let i = 2; i <= n; i++){
		a *= i;
	}
	return a;
}

function abc(n){
	if (n < 0){
		n *= -1;
	}
	return n;
}

module.exports = expDiff;
