document.write(
  " Q3. Write a program to check if two strings are a rotation of each other?" +
    "<br><br>"
);
function isRotation(a, b) {
  var n = a.length;
  var m = b.length;
  if (n != m) return false;

  // create lps that will hold the longest
  // prefix suffix values for pattern
  var lps = Array.from({ length: n }, (_, i) => 0);

  // length of the previous longest prefix suffix
  var len = 0;
  var i = 1;
  lps[0] = 0; // lps[0] is always 0

  // the loop calculates lps[i] for i = 1 to n-1
  while (i < n) {
    if (a.charAt(i) == b.charAt(len)) {
      lps[i] = ++len;
      ++i;
    } else {
      if (len == 0) {
        lps[i] = 0;
        ++i;
      } else {
        len = lps[len - 1];
      }
    }
  }

  i = 0;

  // match from that rotating point
  for (k = lps[n - 1]; k < m; ++k) {
    if (b.charAt(k) != a.charAt(i++)) return false;
  }
  return true;
}

// Driver code
var s1 = "ABACD";
document.write("First String :" + s1 + "<br>");
var s2 = "CDABA";
document.write("Second String :" + s2 + "<br><br>");
document.write("Result:" + " ");
document.write(
  isRotation(s1, s2)
    ? " Yes The strings are a rotation of each other"
    : "The strings are not rotation of each other"
);
