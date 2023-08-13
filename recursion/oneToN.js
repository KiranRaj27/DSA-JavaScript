function oneToN(num) {
  if (num <= 0) return;
  oneToN(num - 1);
  console.log(num);
}

oneToN(5)
