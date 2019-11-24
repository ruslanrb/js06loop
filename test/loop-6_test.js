 "use strict";

const assert = require('assert');
const fs = require('fs');

QUnit.test("ЗАДАЧА 6: функция expDiff",
  function(){
  	const fs = require('fs');
    assert.ok(fs.existsSync('loop-06.js'), "Файл loop-06.js не существует");

	const expDiff = require('../loop-06.js');
	let X = [0.0001, -0.0001, 0, 1, -1, 1.5, 2, 0.12, 0.24, -0.6, 0.6, -0.6, 0.06, -0.06];

	for (let x of X) {
		let sum = 0, a = 1, i = 1;
		while (Math.abs(a) >= 0.0001) {
			sum += a;
			a *= x;
			a /= i;
			i++;
		}
		let correct = Math.abs(Math.exp(x) - sum), 
		     answer = expDiff(x)
		assert.ok(Math.abs(answer - correct) < 0.00001, 
				   `Для x=${x}:\nваш ответ  ${answer}, \nправильный ${correct}, погрешность результата более 10**-5`);
	}
});