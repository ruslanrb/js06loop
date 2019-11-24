const gcd = require('../loop-03.js');

QUnit.test("ЗАДАЧА 03,НОД", 
  function(assert){
	assert.deepEqual(gcd(24,18), 6, "Не выполнено при (24,18)");
	assert.deepEqual(gcd(45,-90), 45, "Не выполнено при (45,-90)");
	assert.deepEqual(gcd(180,150),30, "Не выполнено при (180,150)");
	assert.deepEqual(gcd(1,123),1, "Не выполнено при (1,123)");
	assert.deepEqual(gcd(-11,-121),11, "Не выполнено при (11,121)");
  }
);
