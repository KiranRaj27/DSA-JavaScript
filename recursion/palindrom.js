function isPalRec(str, s, e) {
  if (s === e) return true;

  if (str[s] !== str[e]) return false;

  if (s < e + 1) return isPalRec(str, s + 1, e - 1);

  return true;
}

function isPalindrome(str) {
  let n = str.length;

  if (n === 0) return true;

  return isPalRec(str, 0, n - 1);
}

let str = "malayalam";

if (isPalindrome(str)) console.log("Yes");
else console.log("No");
