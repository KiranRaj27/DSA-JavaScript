function factorial(num) {
  if (num === 0) return 1;
  let fact = num * factorial(num - 1);
  return fact;
}

console.log(factorial(4));

function factorialTwo(num) {
  if (num === 0) return 1;
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
}

console.log(factorialTwo(20));

