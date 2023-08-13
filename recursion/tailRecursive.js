function fact(n, a = 1) {
  if (n === 0) {
    return a;
  }

  return fact(n - 1, n * a);
}

console.log(fact(5))
