const checkCardNumber = require('../loop-05.js');
QUnit.test("Задача 05,Проверка карты", 
	function(assert){
		assert.deepEqual(checkCardNumber("4372282244310005"), true, "Не выполнено 4372282244310005");
		assert.deepEqual(checkCardNumber("2200550150171302"), true, "Не выполнено 2200550150171302");
		assert.deepEqual(checkCardNumber("12030101010413123"), "Error", "Не выполнено 12030101010413123");
		assert.deepEqual(checkCardNumber("1203010101010101"), false, "Не выполнено 1203010101010101");
		assert.deepEqual(checkCardNumber("12030101000413124"), "Error", "Не выполнено 12030101000413124");
		assert.deepEqual(checkCardNumber("22030101010413123"), "Error", "Не выполнено 12030101010413123");
	}
);


