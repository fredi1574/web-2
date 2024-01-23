const display = document.querySelector("#input");
let expression = "";

function clearDisplay() {
  display.innerText = "";
}

function appendToDisplay(value) {
  display.innerText += value;
  console.log(display.innerHTML);
}

function deleteLast() {
  display.innerText = display.innerText.slice(0, -1);
}

function calculate() {
  display.innerText = eval(display.innerText);
  if (display.innerText === "NaN") {
    display.innerText = "Error";
  }
}

function negate() {
  display.innerText *= -1;
}
