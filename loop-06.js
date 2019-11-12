function expDiff(x) {
    // модуль разности между стандартной экспонентой и приближением в виде ряда
    let exp = 0, i = 0;
    do{
    	if (i == 0){
    		exp += 1;
    	}
    	else{
    		if (abc((pow(x, i) / fact(i))) < 0.0001){
    			break;
    		}
    		else{
    			exp += pow(x, i) / fact(i);
    		}
    	}
    	i++;
    }while(true);
    return Math.exp(x) - abc(exp);
}

function pow(n, x){
	let num = 1;
	for (let i = 0; i < x; i++){
		num *= n;
	}
	return num;
}

function fact(n){
	let x = 1;
	for (let i = 2; i <= n; i++){
		x *= i;
	}
	return x;
}

function abc(n){
	if (n < 0){
		n *= -1;
	}
	return n;
}
module.exports = expDiff;
