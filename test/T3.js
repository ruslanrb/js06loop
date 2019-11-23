const f = require('../loop-03.js');

QUnit.test("ЗАДАЧА 03. Написать f(m, n), которая возвращает наибольший общий делитель чисел m и n", function(assert){
	assert.deepEqual(f( 24, 18),  6, "Не выполнено f( 24, 18) ===  6")
	assert.deepEqual(f( 15, 20),  5, "Не выполнено f( 15, 20) ===  5")
	assert.deepEqual(f(  4, -2),  2, "Не выполнено f(  4, -2) ===  2")
	assert.deepEqual(f(  1,  0),  0, "Не выполнено f(  1,  0) ===  0")
});