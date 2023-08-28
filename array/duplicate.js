function remDups(arr) {
  let temp = [arr[0]];
  let res = 1;
  for (let i = 1; i < arr.length; i++) {
    if (temp[res - 1] !== arr[i]) {
      temp[res] = arr[i];
      res++;
    }
  }
  for (let i = 0; i < res; i++) {
    arr[i] = temp[i];
  }
  return res;
}

let arr = [10, 20, 20, 30, 30, 30];
console.log("Before Removal: " + arr);
let n = remDups(arr);
console.log(n, arr, "n==========>");
console.log("After Removal: " + arr.slice(0, n));
