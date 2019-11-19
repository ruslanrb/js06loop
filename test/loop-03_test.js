const gcd = require('../loop-03.js');

QUnit.test("Задание 3 - gcd(m,n), код нахождения наибольшего общего делителя", 
  function(assert){
	assert.deepEqual(gcd(24,18), 6, "gcd(24,18) === 6");
	assert.deepEqual(gcd(18,24), 6, "gcd(18,24) === 6");
	assert.deepEqual(gcd(18,18), 6, "gcd(18,18) === 18");
	assert.deepEqual(gcd(0,1), 'АААаааа!', "gcd(0,1) === Нету решения");
	assert.deepEqual(gcd(0,0), 'АААаааа!', "gcd(0,0) === Нету решения");
	assert.deepEqual(gcd(-24,18), 6, "gcd(-24,18) === 6");
	assert.deepEqual(gcd(24,-18), 6, "gcd(24,-18) === 6");
	assert.deepEqual(gcd(-24,-18), 6, "gcd(-24,-18) === 6");
  }
);
