document.write("Q9. Write a program to reverse a stack." + "<br><br>");

// JavaScript code to reverse a
// stack using recursion

// using Stack class for
// stack implementation
let st = [];

// Below is a recursive function
// that inserts an element
// at the bottom of a stack.
function insert_at_bottom(x) {
  if (st.length == 0) st.push(x);
  else {
    // All items are held in Function
    // Call Stack until we reach end
    // of the stack. When the stack becomes
    // empty, the st.size() becomes 0, the
    // above if part is executed and
    // the item is inserted at the bottom
    let a = st.pop();
    insert_at_bottom(x);

    // push allthe items held
    // in Function Call Stack
    // once the item is inserted
    // at the bottom
    st.push(a);
  }
}

// Below is the function that
// reverses the given stack using
// insert_at_bottom()
function reverse() {
  if (st.length > 0) {
    // Hold all items in Function
    // Call Stack until we
    // reach end of the stack
    let x = st.pop();
    reverse();

    // Insert all the items held
    // in Function Call Stack
    // one by one from the bottom
    // to top. Every item is
    // inserted at the bottom
    insert_at_bottom(x);
  }
}

// Driver Code

// push elements into
// the stack
st.push("1");
st.push("2");
st.push("3");
st.push("4");

document.write("Original Stack<br>");

document.write(st.join(" ") + "<br><br>");

// function to reverse
// the stack
reverse();

document.write("Reversed Stack<br>");

document.write(st.join(" "));
