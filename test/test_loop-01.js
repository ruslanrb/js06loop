"use strict";

QUnit.test("ЗАДАЧА 1: 100 приветствий при помощи for", function(assert){
    const fs = require('fs');
    const execSync = require('child_process').execSync;
    assert.ok(fs.existsSync('loop-01.js'), "Файл loop-01.js не существует");

    let code = fs.readFileSync('loop-01.js');
    assert.ok(code['includes']('for'), 'Файл не содержит оператор for');
    assert.ok(!code.includes('while'), 'Файл не должен содержать операторов while');

    let res = execSync('node loop-01.js').toString().toLowerCase();
    let hello = 'hello world!\n';
    let correct = '';

    for (let i=0; i<100; i++) {
        correct += hello;
    }
    
    assert.strictEqual(res.length, correct.length, "Длина вывода не равна "+correct.length);
    assert.strictEqual(res, correct, "Вывод не равен в точности требуемому");
  }
)
