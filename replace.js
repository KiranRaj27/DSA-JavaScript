function numb(n) {
  let temp = n;
  let teest = 0;
  while (n >= 0) {
    let x = n % 10;
    if (x === 0) {
      teest = teest * 10 + x + 5;
    } else {
      teest = teest * 10 + x;
    }
    n = Math.floor(n / 10);
  }
}
