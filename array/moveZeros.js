function moveZerosToEnd(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[count++] = arr[i];
        }
    }

    for (let i = count; i < arr.length; i++) {
        arr[i] = 0;
    }

    console.log("Modified array: " + arr);
}

// test the function
let testArr = [0, 1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9];
console.log("Original array: " + testArr);
moveZerosToEnd(testArr);