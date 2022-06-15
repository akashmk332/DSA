document.write(
  "Q10. Write a program to find the smallest number using a stack." + "<br><br>"
);

// Javascript program to find smallest and elements
let ar = [12, 13, 1, 10, 34, 1];
let v = ar.length;
function print2Smallest(ar, ar_size) {
  let i, first, second;

  /* There should be atleast two elements */
  if (ar_size < 2) {
    document.write(" Invalid Input ");
    return;
  }

  first = Number.MAX_VALUE;
  for (i = 0; i < ar_size; i++) {
    if (ar[i] < first) {
      first = ar[i];
    } else if (ar[i] < second && ar[i] != first) second = ar[i];

    /* If arr[i] is in between first and second
          then update second */
  }
  document.write("Stack array elements are:" + "\n" + ar + "<br>");
  if (second == Number.MAX_VALUE)
    document.write("There is no second smallest element\n");
  else document.write("The smallest element is " + first + "\n");
}

// Driver program

print2Smallest(ar, v);
