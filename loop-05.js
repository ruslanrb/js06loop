function checkCardNumber(nstr) {
    var a = "";
    var b = 0;
    var c = 0;
    for(var i = 0; i < String(nstr).length; i++){
        if((i % 2 == 0) && String(nstr)[i] != " "){
            a += String(Number(String(nstr)[i]) * 2);
            //console.log("checkCardNumber: " + a);
            //console.log("checkCardNumber: " + i);
            //console.log("checkCardNumber: a == " + a);
        }
    }
    for (var i = 0; i < String(a).length; i++){
        b += Number(String(a)[i]);
        //console.log("checkCardNumber: сумма b == " + b);
    }
    for (var i = 0; i < String(nstr).length; i++){
        if((i % 2 != 0) && String(nstr)[i] != " "){
            c += Number(String(nstr)[i])
            //console.log("checkCardNumber: сумма c == " + c);
        }
    }
    //console.log("checkCardNumber: результат == " + (b + c));
    if((b + c) % 10 == 0){
        return true;
    }else{
        return false;
    }
}

module.exports = checkCardNumber;
