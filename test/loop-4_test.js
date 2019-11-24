const pyramid = require('../loop-04.js');

QUnit.test("pyramid(n) Нарисовать пирамиду", 
	function(assert){
	       assert.deepEqual(pyramid( 0), "", "Не выполнено")
	       assert.deepEqual(pyramid( 1), "#", "Не выполнено")
	       assert.deepEqual(pyramid( 2), " #\n###", "Не выполнено")
	       assert.deepEqual(pyramid( 3), "  #\n ###\n#####", "Не выполнено")
	       assert.deepEqual(pyramid( 21) "", "Не выполнено")
	}
);
