function sumOfDigits(n) {
  if (n === 0) {
    return 0;
  }

  return (n % 10) + sumOfDigits(Math.floor(n / 10));
}


console.log(sumOfDigits(12))