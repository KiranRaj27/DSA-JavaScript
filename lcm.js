// function lcm(a, b) {
//   let lc = 0;
//   let i = Math.max(a, b);
//   while (lc === 0) {
//     if (i % a === 0 && i % b === 0) {
//       lc = i;
//     }
//     i++;
//   }
//   return lc;
// }

// console.log(lcm(3, 7));

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

console.log(lcm(4, 6));
