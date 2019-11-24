const assert = require('assert')
const fs = require('fs')
const execSync = require('child_process').execSync


describe('ЗАДАЧА 2: 100 приветствий при помощи do..while', function(){
	let code;

	it('файл существует ', function(){
		assert(fs.existsSync('loop-02.js'), "Файл не существует")
	})

	it('файл непуст', function(){
		let stats = fs.statSync('loop-02.js')
		let fileSize = stats["size"]
		assert(fileSize > 0, "Файл пуст")
	})

	it('содержит оператор do .. while', function(){
		let code = fs.readFileSync('loop-02.js')
		assert(code['includes']('while'))
		assert(code['includes']('do'))
	})
	
	it('не содержит операторов for', function(){
		let code = fs.readFileSync('loop-02.js')
	 	assert(!code.includes('for'))
	})

	hello = 'Hello world!\n'
	correct = ''
	for (let i=0; i<100; i++) {
		correct += hello
	}
	
	it('выдает результат правильной длины', function(){
		res = execSync('node loop-02.js').toString();
		assert.strictEqual(res.length, correct.length, "Длина вывода не равна "+correct.length)
	})

	it('выдает верный результат', function(){
		res = execSync('node loop-02.js').toString();
		assert.strictEqual(res, correct, "Не равен в точности требуемому")
	})
})
