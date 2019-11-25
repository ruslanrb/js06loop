const checkCardNumber = require('../loop-05.js');

QUnit.test("ЗАДАЧА 05", function(assert){
	assert.deepEqual(checkCardNumber(4316448172086813), true, "Не выполнен checkCardNumber(4316448172086813) ")
	assert.deepEqual(checkCardNumber(5656517624382346), true, "Не выполнен checkCardNumber(5656517624382346) ")
	assert.deepEqual(checkCardNumber(5720556663220720), true, "Не выполнен checkCardNumber(5720556663220720) ")
	assert.deepEqual(checkCardNumber(5160843635740044), true, "Не выполнен checkCardNumber(5160843635740044) ")
	assert.deepEqual(checkCardNumber(5852268454073868), true, "Не выполнен checkCardNumber(5852268454073868) ")
	assert.deepEqual(checkCardNumber(5175082465753545), true, "Не выполнен checkCardNumber(5175082465753545) ")

	assert.deepEqual(checkCardNumber(4716846041249), true, "Не выполнен checkCardNumber(4716846041249) ")
	assert.deepEqual(checkCardNumber(4916624715960), true, "Не выполнен checkCardNumber(4916624715960) ")
	assert.deepEqual(checkCardNumber(4532067040558), true, "Не выполнен checkCardNumber(4532067040558) ")
	assert.deepEqual(checkCardNumber(4594589882735), true, "Не выполнен checkCardNumber(4594589882735) ")
	assert.deepEqual(checkCardNumber(4532781648769), true, "Не выполнен checkCardNumber(4532781648769) ")
	assert.deepEqual(checkCardNumber(4929939629792), true, "Не выполнен checkCardNumber(4929939629792) ")

	assert.deepEqual(checkCardNumber(-5175082465753545), false, "Не выполнен checkCardNumber(-5175082465753545) ")
	assert.deepEqual(checkCardNumber(-5175082465753545), false, "Не выполнен checkCardNumber(-5175082465753545) ")
	assert.deepEqual(checkCardNumber( 2000000000000000), false, "Не выполнен checkCardNumber( 2000000000000000) ")

	assert.deepEqual(checkCardNumber(42132), false, "Не выполнен checkCardNumber(42132) ")
	assert.deepEqual(checkCardNumber(3639123823987293712378182389123785), false, "Не выполнен checkCardNumber(3639123823987293712378182389123785) ")
});
