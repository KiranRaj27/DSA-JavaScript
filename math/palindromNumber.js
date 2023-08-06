/**
 * Function to check given number is palindrom
 * @param {Integer} num
 * @returns Boolean
 */
function palindromNumber(num) {
  let reverse = 0;
  let temp = num;
  while (temp !== 0) {
    reverse = reverse * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
  }
  return reverse === num;
}

console.log(palindromNumber(1331));
