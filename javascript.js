let input = [];
let lastOperatorClicked = "";
let savedInput = 0;
let output = 0;

let operators = {
  "+": function (a, b) {
    return a + b;
  },
  "-": function (a, b) {
    return a - b;
  },
  "/": function (a, b) {
    return a / b;
  },
  "*": function (a, b) {
    return a * b;
  },
};

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");

const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");

one.addEventListener("click", () => handleClick(1));
two.addEventListener("click", () => handleClick(2));
three.addEventListener("click", () => handleClick(3));
four.addEventListener("click", () => handleClick(4));
five.addEventListener("click", () => handleClick(5));
six.addEventListener("click", () => handleClick(6));
seven.addEventListener("click", () => handleClick(7));
eight.addEventListener("click", () => handleClick(8));
nine.addEventListener("click", () => handleClick(9));
zero.addEventListener("click", () => handleClick(0));

add.addEventListener("click", () => handleClickedOperator("+"));
subtract.addEventListener("click", () => handleClickedOperator("-"));
divide.addEventListener("click", () => handleClickedOperator("/"));
multiply.addEventListener("click", () => handleClickedOperator("*"));

function handleClick(clickedNumber) {
  //When user clicks digit 0-9
  input.push(clickedNumber); //Push into input array

  document.getElementById("screen").textContent = input.join(""); //Convert to a string and display on screen
}

function handleClickedOperator(clickedOperator) {
  // Clicking an operator is similar to clicking 'equals' i.e. performs calculation using the last operator clicked

  if (lastOperatorClicked) {
    // if clicking an operator button for second time

    output = operators[lastOperatorClicked](savedInput, Number(input.join(""))); //Perform calculation on the stored result and current input using the last operator clicked.

    //console.log('the last operator clicked is ' + lastOperatorClicked);
    //console.log('the input is ' + Number(input.join("")));
    //console.log('the savedInput is '+ savedInput);
    //console.log('the output is ' + output);
  } else {
    output = Number(input.join("")); // If user has not entered two values yet, use the value of the current input
  }

  document.getElementById("screen").textContent = output; //Display the result

  lastOperatorClicked = clickedOperator; //Store the clicked operator

  savedInput = output; //Store the result value

  input = []; //Clear the input array ready for user to type in a new number
}
