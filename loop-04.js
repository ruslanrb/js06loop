function pyramid(n) {
	a = " ";
	b = "#";
	c = "\n";
	s = "";
	if ((n >= 1)&&(n <= 20)) {
		for(i = 0; i < n; i++) {
			for(j = 0; j < n - i - 1; j++) { 
				s += a;
			}
			for(j = 0; j < 2 * i + 1; j++) { 
				s += b;
			}
			if (i < n -1) s += c;
		}
	}else{
		console.log("Введите число от 1 до 20")
	}
	return s;
}

module.exports = pyramid;