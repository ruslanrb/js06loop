function f(n) {
    // проверка номера кредитной карты
var a,c;
var b=0;
var d=0;
var h=n;
var v=0;
for(i=1000000000000000;i>1;i=i/100){
a=Math.trunc(n/i);
if (a<5){
b=(a*2)+b;
}else{
b=(1+((a*2)%10)+b)
}
n=n-(Math.trunc(n/(i/10))*i/10)}

for(i=100000000000000;i>=1;i=i/100){
c=Math.trunc(h/i);
v=c%10;
d=v+d;
}
if ((b+d)%10==0){
return "True"
}else{
return "False"
}
}
module.exports = f;
