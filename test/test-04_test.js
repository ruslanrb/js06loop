const pyramid = require('../loop-04.js');

QUnit.test("ЗАДАЧА 04.Пирамида", 
  function(assert){
	assert.deepEqual(pyramid(3),"  #\n ###\n#####", "Не выполнено n=3");
	assert.deepEqual(pyramid(1),"#", "Не выполнено n=1");
	assert.deepEqual(pyramid(5),"    #\n   ###\n  #####\n #######\n#########", "Не выполнено n=4");
  }
);
