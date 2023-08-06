/**
 * Function to print prime factors of a number
 * @param {Integer} n
 */
function primeFactors(n) {
  let primeFactor = [];
  while (n % 2 === 0) {
    primeFactor.push(2);
    n = n / 2;
  }

  for (let i = 3; i <= Math.sqrt(n); i = i + 2) {
    while (n % i === 0) {
      primeFactor.push(i);
      n = n / i;
    }
  }

  if (n > 2) primeFactor.push(n);
  console.log(primeFactor);
}

primeFactors(300);
