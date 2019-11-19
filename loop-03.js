
var gcd = function(m, n) {
    if ( ! n) {
        return m;
    }

    return gcd(n, m % n);
};

module.exports = gcd;
