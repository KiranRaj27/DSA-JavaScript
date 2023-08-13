function sumof(n) {
  if (n <= 0) {
    return 0;
  }
  return n + sumof(n - 1);
}

console.log(sumof(6))