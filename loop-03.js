function f(m,n) {
	var res=0;
	var a;
	m=Math.abs(m);
	n=Math.abs(n);
	// напишите код нахождения наибольшего общего делителя
if (m<n){
	a=m}else{a=n}
for (var i=1;i<a+1;i++){
	if (((m%i)===0)&&((n%i)===0)&&(i>res)) res=i}
	return res}

module.exports = f;
