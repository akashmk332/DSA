document.write(
  "Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it." +
    "<br><br>"
);

// javascript recursive function to
// solve tower of hanoi puzzle

var b = 6; // Number of disks
document.write("Number of disk here:" + b + "<br><br>");
function towerOfHanoi(b, from_rod, to_rod, aux_rod) {
  if (b == 0) {
    return;
  }
  towerOfHanoi(b - 1, from_rod, aux_rod, to_rod);
  document.write(
    "Move disk " +
      b +
      "  Shift from Tower " +
      from_rod +
      " to Tower " +
      to_rod +
      ".<br/>"
  );
  towerOfHanoi(b - 1, aux_rod, to_rod, from_rod);
}

towerOfHanoi(b, "A", "C", "B"); // A, B and C are names of rods
