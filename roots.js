function root(a, b, c) {
  let x1 = Math.round((-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a));
  let x2 = Math.round((-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a));
  console.log(x1, x2);
}

root(1, -7, 12);

