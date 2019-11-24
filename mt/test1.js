const assert = require('assert')
const fs = require('fs')
const execSync = require('child_process').execSync


describe('ЗАДАЧА 1: 100 приветствий при помощи for', function(){
	let code;

	it('файл loop-01.js существует ', function(){
		assert(fs.existsSync('loop-01.js'), "Файл loop-01.js не существует")
	})

	it('файл непуст', function(){
		let stats = fs.statSync('loop-01.js')
		let fileSize = stats["size"]
		assert(fileSize > 0, "Файл пуст")
	})

	it('содержит оператор for', function(){
		let code = fs.readFileSync('loop-01.js')
		assert(code['includes']('for'))
	})
	
	it('не содержит операторов while', function(){
		let code = fs.readFileSync('loop-01.js')
	 	assert(!code.includes('while'))
	})

	hello = 'Hello world!\n'
	correct = ''
	for (let i=0; i<100; i++) {
		correct += hello
	}
	
	it('выдает результат правильной длины', function(){
		res = execSync('node loop-01.js').toString();
		assert.strictEqual(res.length, correct.length, "Длина вывода не равна "+correct.length)
	})

	it('выдает верный результат', function(){
		res = execSync('node loop-01.js').toString();
		assert.strictEqual(res, correct, "Не равен в точности требуемому")
	})
})
