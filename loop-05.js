function checkCardNumber(nstr) {
    var nstr2 = nstr;
    var summa = 0;
    var lenghtNstr = 0; 

    while (nstr2 > 0) {
        nstr2 = (nstr2 - nstr2 % 10) / 10;
        lenghtNstr += 1;
    }

    if ((lenghtNstr>=13) && (lenghtNstr<=16)) {
        for (var i=0; i<lenghtNstr; i++) {
            var cardNmbr = parseInt(nstr[i]);
            if ((lenghtNstr - i) % 2 === 0) { 
                cardNmbr = cardNmbr * 2;

                if (cardNmbr > 9) {
                    cardNmbr = cardNmbr - 9;
                }
            }
            summa += cardNmbr;
        }
    }
    
    if (summa % 10 === 0) {
        return true;
    } 
    else {
        return false;
    }
}

module.exports = checkCardNmbr;
