/**
 * This is the native approch to check wheather number is prime or not
 * @param {Number to check prime or not} num
 * @returns Boolean
 */
function checkPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(checkPrime(11));

/**
 * This is more efficient
 * @param {Number to check prime or not} num
 * @returns Boolean
 */
function checkPrimeSecond(num) {
  if (num <= 1) return false;
  if (num === 2 || num === 3) return true;
  if (num % 2 === 0 || num % 3 === 0) true;
  for (let i = 5; i < Math.sqrt(num); i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

console.log(checkPrimeSecond(11));
