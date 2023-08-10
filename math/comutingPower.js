// function power(x, n) {
//   pow = 1;
//   for (let i = 1; i <= n; i++) {
//     pow = pow * x;
//   }
//   return pow;
// }

// console.log(power(2,3))  // time complexity O(n) 2. Space complexity O(1)

function power(x, y) {
  if (y === 0) return 1;
  let temp = power(x, Math.floor(y / 2));
  if (y % 2 === 0) return temp * temp;
  else return x * temp * temp;
}

let x = 2;
let y = 20;

console.log(power(x, y)); // time complexity O(logn) space complexity O(logn)
