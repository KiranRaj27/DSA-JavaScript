function secondLarget(arr) {
  let largest = 0;
  let secondLarget = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLarget = largest;
      largest = arr[i];
    }
  }
  return secondLarget;
}

console.log(secondLarget([34, 42, 45, 2, 1]));
