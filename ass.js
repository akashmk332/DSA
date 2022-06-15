document.write(
  "Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?" +
    "<br><br>"
);

let arr = [1, 5, 7, -1, 5];
document.write("Given Array elements:" + arr + "<br>");
let n = arr.length;
document.write("Array length:" + n + "<br>");
let sum = 6;
document.write("Sum of element is:" + sum + "<br>");

function printPairs(arr, n, sum) {
  let count = 0; // Initialize result

  // Consider all possible pairs and check
  // their sums
  for (let i = 0; i < n; i++)
    for (let j = i + 1; j < n; j++)
      if (arr[i] + arr[j] == sum)
        document.write(
          " Pair of elements is equal to a sum : (" +
            arr[i] +
            ", " +
            arr[j] +
            ")" +
            "<br>"
        );
}
printPairs(arr, n, sum);
