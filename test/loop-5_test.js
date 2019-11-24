const checkCardNumber = require('../loop-05.js');

QUnit.test("checkCardNumber(nstr) Проверка номера карты", 
	function(assert){
	       assert.deepEqual(checkCardNumber("4372282244310005"), true, "Не выполнено")
	       assert.deepEqual(checkCardNumber("1133184056510016"), false, "Не выполнено")
	       assert.deepEqual(checkCardNumber("100000000000000"), false, "Не выполнено")
	       assert.deepEqual(checkCardNumber("7243222831440500"), true, "Не выполнено")
	}
);
