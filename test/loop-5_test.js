const checkCardNumber = require('../loop-05.js');

QUnit.test("ЗАДАЧА 03. checkCardNumber(nstr) проверяет правильность номера карты", function(assert){
	assert.deepEqual(checkCardNumber("4372 2822 4431 0005"), true, "Не выполнено checkCardNumber(4372 2822 4431 0005) == true")
	assert.deepEqual(checkCardNumber("2321 3434 1232 3411"), false, "Не выполнено checkCardNumber(2321 3434 1232 3411) == false")
	assert.deepEqual(checkCardNumber("2200 5501 5018 7373"), true, "Не выполнено checkCardNumber(2200 5501 5018 7373) == true")
	assert.deepEqual(checkCardNumber("2324 4542 2344 0002"), false, "Не выполнено checkCardNumber(2324 4542 2344 0002) == false")
});
