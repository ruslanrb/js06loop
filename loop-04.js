function pyramid(n) {
	var res = "";
	// напишите код, обратите внимание, что пробелы 
	// должны быть в начале строки, но не в конце
	if ((n < 1) || (n>20)){return ('Диапазон от 1 до 20 по условию!')}
	for(let p = 0; p < n; p++)
	{
		for(let t = 1; t <= n - p - 1; t++){res +=" "}
		for(let s = 1; s <= (p * 2) + 1; s++){res +="#"}
		if(p < n - 1){res += "\n"}
	}
	return res
}
module.exports = pyramid;