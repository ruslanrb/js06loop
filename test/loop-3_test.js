 const f = require('../loop-03.js');

QUnit.test("f(m, n) вернуть больший делитель", 
	function(assert){
		assert.deepEqual(f(100,50),50,"error");
		assert.deepEqual(f(14,16),2,"error");
		assert.deepEqual(f(1,-1),1,"error");	
		assert.deepEqual(f(-40,25),5,"error");
	}
);