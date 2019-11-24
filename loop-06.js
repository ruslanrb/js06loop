function expDiff(nstr) {
    // модуль разности между стандартной экспонентой и приближением в виде ряда
    let e=1; x=nstr; w=1; f=1; exp=-1;
    	while(w > 0.0001){
    		f = 1;
    		x = 1;
    			for (let i=1; i<e; i=i+1) {
    				x = x*nstr;
    				f = f*i;
    			}
    		exp = exp + w;
    		w = x/f;
    		e = e +1;
    }
    return(Math.exp(nstr) - exp);
}
module.exports = expDiff;