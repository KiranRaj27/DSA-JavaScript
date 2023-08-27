function reverseArray(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

function printArray(arr) {
  console.log(arr.join(" "));
}

let arr = [1, 2, 3, 4, 5, 6];

console.log("Original array: ");
printArray(arr);

reverseArray(arr, 0, arr.length - 1);

console.log("Reversed array: ");
printArray(arr);
