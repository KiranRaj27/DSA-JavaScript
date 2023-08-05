function countDigits(num) {
  if (num === 0) return 1;
  let count = 0;
  while (num !== 0) {
    count++;
    num = Math.floor(num / 10);
  }
  return count;
}

console.log(countDigits(3456));
