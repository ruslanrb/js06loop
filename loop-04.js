function pyramid(n) {
	var n = arguments[0];
	var j = 0;
	var i = 0;
	                     // напишите код, обратите внимание, что пробелы 
	                     // должны быть в начале строки, но не в конце
	while (i < n) {
		var res = "";
		var space = "";
		for (j = 0; j < n - i; j++) space += " ";
		for (j = 0; j < 2 * i + 1; j++) res += "*";
		console.log(space + res);
		i++;
	
	}
	return (space);
}

module.exports = pyramid;