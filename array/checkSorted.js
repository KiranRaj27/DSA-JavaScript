function isSorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        return false;
      }
    }
  }
  return true;
}

let arr = [7, 2, 30, 10];
console.log(isSorted(arr) ? "true" : "false");

function isSorted2(arr) {
  if (arr.length == 0 || arr.length == 1) return true;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] < arr[i]) {
      return false;
    }
  }
  return true;
}

let arr2 = [20, 23, 23, 45, 78, 88];
if (isSorted2(arr2)) {
  console.log("Yes");
} else {
  console.log("No");
}
