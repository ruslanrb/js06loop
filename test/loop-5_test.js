const f = require('../loop-05.js');

QUnit.test("f(m, n) return bool валидность карты", 
	function(assert){
		assert.deepEqual(f("4372282244310005"), true, "Не выполнено 4372282244310005");
		assert.deepEqual(f("2200550150171302"), true, "Не выполнено 2200550150171302");
		assert.deepEqual(f("12030101010413123"), true, "Не выполнено 12030101010413123");
		assert.deepEqual(f("1203010101010101"), false, "Не выполнено 1203010101010101");
		assert.deepEqual(f("12030101000413124"), false, "Не выполнено 12030101000413124");
		assert.deepEqual(f("22030101010413123"), false, "Не выполнено 12030101010413123");
	}
);