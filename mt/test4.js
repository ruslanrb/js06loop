 "use strict"

const assert = require('assert');
const fs = require('fs');

describe('ЗАДАЧА 4', function(){
	let code;

	it('файл существует ', function(){
		assert(fs.existsSync('loop-04.js'), "Файл не существует");
	});

	it('файл непуст', function(){
		let stats = fs.statSync('loop-04.js');
		let fileSize = stats["size"];
		assert(fileSize > 0, "Файл пуст");
	});

	const pyramid = require('../loop-04.js');

	it('верно при n=1', function(){
		assert.strictEqual(
			pyramid(1).trimRight(), "#", "ошибка при n=1");
	});

	it('верно при n=2', function(){
		assert.strictEqual(
			pyramid(2).trimRight(), " #\n###", "ошибка при n=2");
	});

	it('верно при n=5', function(){
		assert.strictEqual(
			pyramid(5).trimRight(), "    #\n   ###\n  #####\n #######\n#########", "ошибка при n=5");
	});

	it('верно при n=20', function(){
		let n = 20;
		assert.strictEqual(
			pyramid(n).trimRight().length, n*(3*n+1)/2 - 1,
			"длина неправильная при n=20");
		let i, j, correct = "";
		for (i=0; i<n; i++){
			for (j=0; j<n-1-i; j++){
				correct += " ";
			}
			for (j=0; j<2*i+1; j++){
				correct += "#";
			}
		}
	});
});
