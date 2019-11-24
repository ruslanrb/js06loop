"use strict";

QUnit.test("ЗАДАЧА 2: 100 приветствий при помощи do..while", function(assert){
	const fs = require('fs');
	const execSync = require('child_process').execSync;
	assert.ok(fs.existsSync('loop-02.js'), "Файл loop-02.js не существует");

	let code = fs.readFileSync('loop-02.js');

	assert.ok(code['includes']('while'), 'Файл должен содержать оператор do..while');
	assert.ok(code['includes']('do'), 'Файл должен содержать оператор do..while');
	assert.notOk(code.includes('for'), 'Файл не должен содержать операторов for');

	let res = execSync('node loop-02.js').toString().toLowerCase();
	let hello = 'hello world!\n';
	let correct = '';
	
	for (let i=0; i<100; i++) {
		correct += hello;
	}
	
	assert.strictEqual(res.length, correct.length, "Длина вывода не равна "+correct.length);
	assert.strictEqual(res, correct, "Вывод не равен в точности требуемому");
  }
)
