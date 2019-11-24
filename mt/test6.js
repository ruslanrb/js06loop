 "use strict"

const assert = require('assert');
const fs = require('fs');

describe('ЗАДАЧА 6: функция expDiff', function(){
	it('файл loop-06.js существует ', function(){
		assert(fs.existsSync('loop-06.js'), "Файл loop-06.js не существует");
	});

	it('файл непуст', function(){
		var stats = fs.statSync('loop-06.js');
		var fileSize = stats["size"];
		assert(fileSize > 0, "Файл пуст");
	});

	const expDiff = require('../loop-06.js');

	let X = [0.0001, -0.0001, 0, 1, -1, 1.5, 2, 0.12, 0.24, -0.6, 0.6, -0.6, 0.06, -0.06]

	for (let x of X) {
		let sum = 0, a = 1, i = 1;
		while (Math.abs(a) >= 0.0001) {
			sum += a;
			a *= x;
			a /= i;
			i++;
		}
		let correct = Math.abs(Math.exp(x) - sum)
		it('дает результат для x = '+x+' с погрешностью менее 10**-5', function(){
			assert(Math.abs(expDiff(x) - correct) < 0.00001, 
				   "значение " + expDiff(x) + " вместо " + correct);
		});
	}	
});