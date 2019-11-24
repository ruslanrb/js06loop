 "use strict"

const assert = require('assert');
const fs = require('fs');

describe('ЗАДАЧА 5: функция checkCardNumber', function(){
	it('файл loop-05.js существует ', function(){
		assert(fs.existsSync('loop-05.js'), "Файл loop-05.js не существует");
	});

	it('файл непуст', function(){
		var stats = fs.statSync('loop-05.js');
		var fileSize = stats["size"];
		assert(fileSize > 0, "Файл пуст");
	});

	const checkCardNumber = require('../loop-05.js');

	it('дает значение типа boolean', function(){
		assert.strictEqual(typeof(checkCardNumber('0000000000000')), 'boolean');
	});

	it('умножает на 2 каждую вторую цифру справа', function(){
		assert.strictEqual(checkCardNumber('0001010101010'), true, 'Проверьте для номера 0001010101010');
		assert.strictEqual(checkCardNumber('0000101010101'), false, 'Проверьте для номера 0000101010101');
	});

	it('дает верные результаты на нескольких примерах из 13 цифр', function(){
		assert.strictEqual(checkCardNumber('3939719360634'), true, 'Проверьте для номера 3939719360634');
		assert.strictEqual(checkCardNumber('8575066716542'), true, 'Проверьте для номера 8575066716542');
		assert.strictEqual(checkCardNumber('7058574351131'), false, 'Проверьте для номера 7058574351131');
	});

	it('дает верные результаты на нескольких примерах из 14 цифр', function(){
		assert.strictEqual(checkCardNumber('24575066716542'), true, 'Проверьте для номера 24575066716542');
		assert.strictEqual(checkCardNumber('24575067616542'), false, 'Проверьте для номера 24575067616542');
		assert.strictEqual(checkCardNumber('11111111111111'), false, 'Проверьте для номера 11111111111111');
	});

	it('дает верные результаты на нескольких примерах из 15 цифр', function(){
		assert.strictEqual(checkCardNumber('332575577650922'), true, 'Проверьте для номера 332575577650922');
		assert.strictEqual(checkCardNumber('184232544957402'), false, 'Проверьте для номера 184232544957402');
		assert.strictEqual(checkCardNumber('111111111111111'), false, 'Проверьте для номера 111111111111111');
	});

	it('дает верные результаты на нескольких примерах из 16 цифр', function(){
		assert.strictEqual(checkCardNumber('4276387234082428'), true, 'Проверьте для номера 4276387234082428');
		assert.strictEqual(checkCardNumber('5190967013969042'), true, 'Проверьте для номера 5190967013969042');
		assert.strictEqual(checkCardNumber('4175009089002164'), false, 'Проверьте для номера 4175009089002164');
	});

}); 