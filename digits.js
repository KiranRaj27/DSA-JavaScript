function digits(num) {
  return Math.floor(Math.log10(num)) + 1;
}

console.log(digits(1000));
