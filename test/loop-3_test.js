const gcd = require('../loop-03.js');

QUnit.test("ЗАДАЧА 03. gcd(m, n) находит НОД", function(assert){
	assert.deepEqual(gcd(12, 24), 12, "Не выполнено gcd(12, 24) == 6")
	assert.deepEqual(gcd(1, 1), 1, "Не выполнено gcd() == 1")
	assert.deepEqual(gcd(4, 2), 2, "Не выполнено gcd() == 2")
	assert.deepEqual(gcd(64, 128), 64, "Не выполнено gcd() == ")
});
