function checkCardNumber(nstr) {
    // проверка номера кредитной карты
}

module.exports = checkCardNumber;



n = 12345;
alert( eval(n.toString().split('').join('+')) );
alert( eval(n.toString().replace(/\d/g, '+$&')) );

