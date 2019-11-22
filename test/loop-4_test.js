const pyramid = require('../loop-04.js');

QUnit.test("ЗАДАЧА 04. pyramid(n) строит пирамиду из n строк", function(assert){
	assert.deepEqual(pyramid(1), "#", "Не выполнено pyramid(1)")
	assert.deepEqual(pyramid(2), " #\n###", "Не выполнено pyramid(2)")
	assert.deepEqual(pyramid(3), "  #\n ###\n#####", "Не выполнено pyramid(3)")
	assert.deepEqual(pyramid(4), "   #\n  ###\n #####\n#######", "Не выполнено pyramid(4)")
});
