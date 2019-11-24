function checkCardNumber(nstr) {
   var d = nstr.length;
   var p;
   var sum = 0;
   
   if ((d < 13) || (d > 16)) {
   	     return ("Error");
   }else{
   	     for (var i = d - 2; i >= 0; i = i - 2) {
   	         p = parseInt(nstr[i]) * 2;
   	         if (p > 9) {
   	         	sum = 1 + (p % 10) + sum
   	         }else{
   	         	sum = sum + p;
   	         }
         }
         for (var i = d - 1; i >= 0; i = i - 2) {
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

