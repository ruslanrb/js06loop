function print(text) { // писать console.log слишком долго
	return console.log(text)
}

function factorial(n) {
	if (n <= 1) {
		return n
	}

	return n*factorial(n-1)
}

function abs(n) { // модуль числа
	if (n >= 0) {
		return n
	}
	else {
		return n*-1
	}
}

function pow(n, exp) { // возведение в степень
	k = n
	for (var i = 1; i < exp; i++) {
		n *= k
	}
	return n
}

// проверка
// print(factorial(5)) // 120
// print(abs(5))       // 5
// print(abs(-5))      // 5
// print(pow(5, 3))    // 125

module.exports = {print, factorial, abs, pow};