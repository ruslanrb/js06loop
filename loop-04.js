function pyramid(n) { // 1 <= n <= 20
	var res = "#";
	// напишите код, обратите внимание, что пробелы 
	// должны быть в начале строки, но не в конце
	if(n < 1 || n > 20){
		return "Ошибка";
	}
	if(n > 1){
		for (let a = n; a > 1; a--){ // номер строки
			res = " " + res;
			res = res + "\n";
			c = n - a + 1;
			for (c; c < n - 1; c++){ // пробел перед последующей строкой
				res = res + " ";
			}
			res = res + "#";
			b = n - a + 2;
			for (b; b > 1; b--){ // последующая строка
				res = res + "#" + "#";	
			}
		}
	}
	return res;
}

module.exports = pyramid;