const checkCardNumber = require('../loop-05.js');

QUnit.test("ЗАДАЧА 05. checkCardNumber(nstr)= true или false", function(assert){
	assert.deepEqual(checkCardNumber(4372282244310005), "true", "Не выполнено checkCardNumber(4372282244310005) === true") // образец с примера задачи, четное число
	assert.deepEqual(checkCardNumber(437228224431007), "true", "Не выполнено checkCardNumber(437228224431007) === true") // в сумме дает 60, нечетное число
	assert.deepEqual(checkCardNumber(437228224431000), "false", "Не выполнено checkCardNumber(437228224431000) === false") // в сумме дает 53
	assert.deepEqual(checkCardNumber(1234123412341234), "false", "Не выполнено checkCardNumber(1234123412341234) === false") // в сумме дает 56
	assert.deepEqual(checkCardNumber(1111), "Ошибка", "Не выполнено checkCardNumber(1111) === Ошибка")
	assert.deepEqual(checkCardNumber(111111111111111111111111), "Ошибка", "Не выполнено checkCardNumber(111111111111111111111111) === Ошибка")
	assert.deepEqual(checkCardNumber(2020100000000000), "true", "Не выполнено checkCardNumber(2020100000000000) === true") // в сумме дает ровно 10
});