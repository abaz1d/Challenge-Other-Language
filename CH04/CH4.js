var indexPrimes = function (param1) {
    var i, primes = [2, 3], n = 5;
    var isPrime = function (n) {
        var i = 1, p = primes[i];
        var limit = Math.ceil(Math.sqrt(n));
        while (p <= limit) {
            if (n % p === 0) {
                return false;
            }
            i += 1;
            p = primes[i];
        }
        return true;
    };
    for (var i_1 = 2; i_1 <= param1; i_1 += 1) {
        while (!isPrime(n)) {
            n += 2;
        }
        primes.push(n);
        n += 2;
    }
    return primes[param1 - 1];
};
console.log(indexPrimes(4));
console.log(indexPrimes(500));
console.log(indexPrimes(37786));
