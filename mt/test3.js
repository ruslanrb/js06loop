"use strict"

const assert = require('assert');
const fs = require('fs');

describe('ЗАДАЧА 3: НОД двух чисел', function(){
	let code;

	it('файл существует ', function(){
		assert(fs.existsSync('loop-03.js'), "Файл не существует");
	});

	it('файл непуст', function(){
		let stats = fs.statSync('loop-03.js');
		let fileSize = stats["size"];
		assert(fileSize > 0, "Файл пуст");
	});

	const gcd = require('../loop-03.js');

	it('gcd(20, 100)', function(){
		assert.strictEqual(gcd(20,100), 20, "Неверно!")
	});	

	it('gcd(1, 31)', function(){
		assert.strictEqual(gcd(1,31), 1, "Неверно!")
	});	

	it('gcd(31, 1)', function(){
		assert.strictEqual(gcd(31,1), 1, "Неверно!")
	});	

	it('gcd(18, 24)', function(){
		assert.strictEqual(gcd(18,24), 6, "Неверно!")
	});	

	it('gcd(18, 24)', function(){
		assert.strictEqual(gcd(24,24), 6, "Неверно!")
	});	

	it('gcd(11, 31)', function(){
		assert.strictEqual(gcd(11,31), 1, "Неверно!")
	});	

	it('gcd(11, 31)', function(){
		assert.strictEqual(gcd(11,31), 1, "Неверно!")
	});	

	it('gcd(31, 31)', function(){
		assert.strictEqual(gcd(31,31), 31, "Неверно!")
	});	

});
