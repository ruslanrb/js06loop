function expDiff(x) {
    var n=1;
    var a=0;
    var b=1;
    var c=1;
    var i=1;
do{
    c = c * i;
    a = (Math.pow(x,i)) / c;
    if ((Math.abs(a)) >= 0.0001){
        b = b + a;
    }else{
        return Math.abs((Math.exp(x)) - b)}
        i++
    }
while (true);
}

module.exports = expDiff;
