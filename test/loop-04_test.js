const pyramid = require('../loop-04.js');

QUnit.test("ЗАДАЧА 04. pyramid(n)= пирамида из решеток(#)", function(assert){
	assert.deepEqual(pyramid(1), "#", "Не выполнено pyramid(1) === #")
	assert.deepEqual(pyramid(2), " #\n###", "Не выполнено pyramid(2) === p#\n###") // p = пробел
	assert.deepEqual(pyramid(3), "  #\n ###\n#####", "Не выполнено pyramid(1) === pp#\np###\n#####")
	assert.deepEqual(pyramid(0), "Ошибка", "Не выполнено pyramid(0) === Ошибка")
	assert.deepEqual(pyramid(21), "Ошибка", "Не выполнено pyramid(21) === Ошибка")
});