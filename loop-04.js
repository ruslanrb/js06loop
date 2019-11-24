function pyramid(n) {
if (n>=1 && n<=20){
  for (var i = 0; i < n; i++) {
    var a = "";
    for (var j = 1; j < n-i; j++) {
      a = a + " ";
    }
    for (var k = 1; k <= (2*i+1); k++) {
      a = a + "#";
    }
    console.log(a);
  }
}
}
module.exports = pyramid;