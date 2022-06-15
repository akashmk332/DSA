document.write(
  "Q8. Write a program to check if all the brackets are closed in a given code snippet." +
    "<br><br>"
);

// Javascript program for checking
// brackets are closed or not

function areBrackets(expr) {
  // Using ArrayDeque is faster
  // than using Stack class
  let stack = [];

  // Traversing the Expression
  for (let i = 0; i < expr.length; i++) {
    let x = expr[i];

    if (x == "(" || x == "[" || x == "{") {
      // Push the element in the stack
      stack.push(x);
      continue;
    }

    // If current character is not opening
    // bracket, then it must be closing.
    // So stack cannot be empty at this point.
    if (stack.length == 0) return false;

    let check;
    switch (x) {
      case ")":
        check = stack.pop();
        if (check == "{" || check == "[") return false;
        break;

      case "}":
        check = stack.pop();
        if (check == "(" || check == "[") return false;
        break;

      case "]":
        check = stack.pop();
        if (check == "(" || check == "{") return false;
        break;
    }
  }

  // Check Empty Stack
  return stack.length == 0;
}

// Driver code
let expr = "([{}])";
document.write("Given code Expression :" + expr + "<br><br>");
// Function call
document.write("Result:" + " ");
if (areBrackets(expr)) document.write(" All Brackets are closed ");
else document.write("All Brackets are not closed ");
