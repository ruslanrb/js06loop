function pyramid(n) {
    var n = n;
    var res = "#";
    var output="";

    if(n>=1 && n<=20){
    	for (var i = 0; i <n; i++){
    		var myspace = "";
    		for(let s = 0; s <(n-i-1); s++){
    			myspace += " ";
    		}
    		for (var j = 1; j <= 2*i + 1; j++){
    			output+=res;
    		}
    		console.log(myspace+output);
        output="";;
    	}
    }
}

module.exports = pyramid;
