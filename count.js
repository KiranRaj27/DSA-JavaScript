// function gcd(a, b) {
//   let g;
//   for (let i = 1; i <= b; i++) {
//     if (a % i === 0 && b % i === 0) {
//       g = i;
//     }
//   }
//   console.log(g);
// }

// gcd(7, 13);

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

console.log(gcd(15, 45));
