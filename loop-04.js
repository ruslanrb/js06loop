function pyramid(n) {
	var s = "";
	var i = 0;
	var q = 0;
	var z = 0;
	if ((n<1)||(n>20)) {
		return("Error!");
	}
	for(i;i<n;i++) {
		for(q=1;q<=n-i-1;q++)
		{
			s+=" "
		}
		for(z=1;z<=i*2+1;z++) {
			s+="#"
		}
		if(i<n-1){s+="\n"}
	}
	return s
}
module.exports = pyramid;
