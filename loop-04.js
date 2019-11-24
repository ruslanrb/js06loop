function pyramid(n) {
	var res = "";
	// напишите код, обратите внимание, что пробелы 
	// должны быть в начале строки, но не в конце
	for(var i=0; i<n; i++)
	{
		for(var j=1; j<=n-i-1; j++)
		{
			res+=" "
		}
		for(var k=1; k<=(i*2)+1; k++)
		{
			res+="#"
		}
		if(i<n-1) 
		{
			res+="\n"
		}
	}
	return res;
}

module.exports = pyramid;
