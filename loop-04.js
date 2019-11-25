function pyramid(n) {
	var i = 0, j = 0;
	var n = 32;
	var space = "",
	    reshotka = "";

	while (i < n) {
	    space = "";
	    reshotka = "";
	    for (j = 0; j < n - i; j++) space += " ";
	    for (j = 0; j < 2 * i + 1; j++) reshotka += "#";
	    console.log(space + reshotka);
	    i++;
	}
}
module.exports = pyramid;
