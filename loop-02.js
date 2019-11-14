// Напишите программу, которая напечатает 100 строк Hello world! при помощи цикла do ... while.

function HW(){
	var a = 0;
	do{
		console.log("Hello, World!");
		a++;
	} while(a<100);
}

module.exports = HW;