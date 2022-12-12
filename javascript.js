let input = [];
let lastOperatorClicked = "=";
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
  "=": function (a) {
    return a;
  },
};
const info = document.getElementById("info");

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
const equals = document.getElementById("equals");

const clear = document.getElementById("clear");
const percentage = document.getElementById("percentage");
const flipSign = document.getElementById("flip-sign");
const decimal = document.getElementById("decimal");

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
decimal.addEventListener("click", () => handleClick("."));

add.addEventListener("click", () => handleClickedOperator("+"));
subtract.addEventListener("click", () => handleClickedOperator("-"));
divide.addEventListener("click", () => handleClickedOperator("/"));
multiply.addEventListener("click", () => handleClickedOperator("*"));
equals.addEventListener("click", () => handleClickedOperator("="));

flipSign.addEventListener("click", () => handleClickedFlipSign());
percentage.addEventListener("click", () => handleClickedPercent());
clear.addEventListener("click", () => handleClickedClear());

//When user clicks digit 0-9
function handleClick(clickedNumber) {
  input.push(clickedNumber); //Push into input array
  document.getElementById("screen").textContent = input.join(""); //Convert to a string and display on screen
}

function handleClickedOperator(clickedOperator) {
  // Clicking an operator button is similar to clicking 'equals' i.e. performs calculation using the last operator clicked and stores the clicked operator to await user inputting the next value

  if (savedInput) {
    output = operators[lastOperatorClicked](savedInput, Number(input.join(""))); //Perform calculation on the stored result and current input using the last operator clicked.
  } else {
    output = Number(input.join("")); // If user has not entered two values yet, use the value of the current input
  }

  if (output === Infinity || output === -Infinity) {
    document.getElementById("screen").textContent = "what the heck??"; //Display a message if user divides by zero
  } else {
    document.getElementById("screen").textContent = output; //Display the result
  }

  lastOperatorClicked = clickedOperator; //Store the clicked operator
  savedInput = output; //Store the result value
  input = []; //Clear the input array ready for user to type in a new number
}

function handleClickedPercent() {
  //If user clicks '%'
  if (savedInput) {
    output = savedInput / 100;
  }

  document.getElementById("screen").textContent = output; //Display the result
  savedInput = output; //Store the result value
  input = []; //Clear the input array ready for user to type in a new number
}

function handleClickedFlipSign() {
  //If user clicks '+/-'
  if (!savedInput) {
    savedInput = -Number(input.join(""));
  } else {
    savedInput = -savedInput;
  }
  lastOperatorClicked = "=";
  output = savedInput;
  document.getElementById("screen").textContent = output; //Display the result
  input = [];
}

function handleClickedClear() {
  //If user clicks 'clear'
  input = [];
  lastOperatorClicked = "";
  savedInput = 0;
  output = 0;
  document.getElementById("screen").textContent = ""; //Display the result
}
