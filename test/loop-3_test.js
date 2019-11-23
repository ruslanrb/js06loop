const f = require('../loop-03.js');

QUnit.test("f(m, n) return наибольший общий делитель", 
	function(assert){
		assert.deepEqual(f(66, 42), 6, "Не выполнено");
		assert.deepEqual(f(128, 16), 16, "Не выполнено");
		assert.deepEqual(f(2, 2), 2, "Не выполнено");
		assert.deepEqual(f(7, 3), 1, "Не выполнено");
		assert.deepEqual(f(-7, 3), 1, "Не выполнено");
		assert.deepEqual(f(-128, -16), 16, "Не выполнено");
		assert.deepEqual(f(42, -9), 3, "Не выполнено");
	}
);