function lRotateOne(arr) {
  let temp = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr[arr.length - 1] = temp;
}

var arr = [1, 2, 3, 4, 5];
var n = 5;

lRotateOne(arr);

console.log("After Rotation", arr);
