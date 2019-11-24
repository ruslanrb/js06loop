const pyramid = require('../loop-04.js');

QUnit.test("ЗАДАЧА 04, Напишите функцию pyramid(n), которая возвращает текстовую пирамиду из решеток",
     function(assert){
	       assert.deepEqual(pyramid(-1), "",                             "Не выполнено pyramid(-1)")
	       assert.deepEqual(pyramid( 0), "",                             "Не выполнено pyramid(0)")
	       assert.deepEqual(pyramid( 1), "#",                            "Не выполнено pyramid(1)")
	       assert.deepEqual(pyramid( 2), " #\n###",                      "Не выполнено pyramid(2)")
	       assert.deepEqual(pyramid( 3), "  #\n ###\n#####",             "Не выполнено pyramid(3)")
	       assert.deepEqual(pyramid( 4), "   #\n  ###\n #####\n#######", "Не выполнено pyramid(4)")
	       assert.deepEqual(pyramid(23), "",                             "Не выполнено pyramid(23)")
    }
);