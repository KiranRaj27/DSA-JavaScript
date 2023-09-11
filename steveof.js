function steveof(n) {
  for (let i = 2; i <= n; i++) {
    if (n % i === 0) {
      continue;
    }
    console.log(i);
  }
}
