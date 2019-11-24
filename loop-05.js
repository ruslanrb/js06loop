function checkCardNumber(nstr) {
   var len = nstr.length;
   var p;
   var sum = 0;
   if ((len < 13) || (len > 16)) {
   	     return ("Error");
   }else{
   	     for (var i = len - 2; i >= 0; i = i - 2) {
   	         p = parseInt(nstr[i]) * 2;
   	         if (p >= 10) {
   	         	p=p%10;
   	         	sum = (p%10) + sum
   	         }else{
   	         	sum = sum + p;
   	         }
         }
         for (var i = len - 1; i >= 0; i = i - 2) {
             sum = parseInt(nstr[i]) + sum;
         }
         if (sum % 10 == 0) {
   	         return true;
         }else{
   	         return false;
         }
   } 
}



module.exports = checkCardNumber;