const f = require('../loop-04.js');

QUnit.test("f(m, n) return наибольший общий делитель", 
	function(assert){
		assert.deepEqual(f(66, 42), 6, "  #\n###\n#####");
		assert.deepEqual(f(128, 16), 16, "Не выполнено");
	}
);