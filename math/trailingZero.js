function trailingZero(num) {
  if (num === 0) return 1;
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }
  let count = 0;
  while (fact % 10 === 0 && fact != 0) {
    count = count + 1;
    fact = Math.floor(fact / 10);
  }
  return count;
}

console.log(trailingZero(10));

function trailingZeroPrime(num) {
  if (num < 0) return -1;

  let count = 0;
  for (let i = 5; num / i >= 1; i *= 5) {
    count += Math.floor(num / i);
  }
  return count;
}

console.log(trailingZeroPrime(1000));
