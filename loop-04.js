function f(n) {
	var res = "#";
	// напишите код, обратите внимание, что пробелы 
	// должны быть в начале строки, но не в конце
var a="";
var b="";
if (0<n && n<21){
for(var i=n;i>0;i--){
for(var c=i;c>0;c--){
a=a+" ";
}
b=b+a+res+"\n";
res=res+"#"+"#";
a="";
}
console.log(b)
}else{
return "Выберите числа от 1-го до 20-ти"
}
}
module.exports = f;