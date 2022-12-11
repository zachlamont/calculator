let input = [];
let lastOperatorClicked = "";
let savedInput = "";
let output = "";

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

add.addEventListener("click", () => handleClick("+"));
subtract.addEventListener("click", () => handleClick("-"));
divide.addEventListener("click", () => handleClick("/"));
multiply.addEventListener("click", () => handleClick("*"));

function handleClick(clickedNumber) {
  input.push(clickedNumber);

  document.getElementById("screen").textContent = input.join(""); //convert input to a string and display on screen
}

function handleClick(clickedOperator) {
  //Assign that operator to a variable called 'lastOperatorClicked'
  //lastOperatorClicked = clickedOperator; //Store value of clicked operator

  //If savedInput is defined, perform the operation eg output = savedInput (lastOperatorClicked) input

  //if (!savedInput){}

  alert(operators[clickedOperator](10, 20));
}
