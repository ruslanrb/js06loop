const f = require('../loop-05.js');

QUnit.test("ЗАДАЧА 05. Правильность ввода номера кредитной карты", function(assert){
	assert.deepEqual(f(4372282244310005),"True" , "ERROR")
	assert.deepEqual(f(1234567890123456),"False", "ERROR")
	assert.deepEqual(f(9876543210987654),"False", "ERROR")
	assert.deepEqual(f(1818181818181818),"True" , "ERROR")
});