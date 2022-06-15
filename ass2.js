document.write(
  "Q2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array." +
    "<br><br>"
);
document.write("Original Array Elements are:");
document.write("<br>");
let a = [1, 2, 3, 4, 5, 6];
let m = a.length;
printArray(a, m);

/* Utility function to
      print an array1ay */
function printArray(a, size) {
  for (let i = 0; i < size; i++) document.write(a[i]);
  document.write("<br>");
  document.write("<br>");
}

function reverseArray(a, m) {
  // Create a copy array
  // and store reversed
  // elements
  let rev = new Array(m);
  for (let i = 0; i < m; i++) rev[m - i - 1] = a[i];

  // Now copy reversed
  // elements back to arr[]
  for (let i = 0; i < m; i++) a[i] = rev[i];
}

// Driver code

reverseArray(a, m);
document.write("Reversed array Elements are:" + "<br>");
printArray(a, m);
