function digits(num) {
  return Math.floor(Math.log10(num)) + 1;
}

console.log(digits(1000));

function utility(a, r, n) {
  return a * Math.pow(r, n - 1);
}

console.log(utility(2, 2, 10));
