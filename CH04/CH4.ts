var indexPrimes = (param1: number) => {
  let i: number,
    primes: number[] = [2, 3],
    n: number = 5;
  const isPrime = (n: number) => {
    let i: number = 1,
      p: number = primes[i];
    let limit: number = Math.ceil(Math.sqrt(n));
    while (p <= limit) {
      if (n % p === 0) {
        return false;
      }
      i += 1;
      p = primes[i];
    }
    return true;
  };
  for (let i = 2; i <= param1; i += 1) {
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
