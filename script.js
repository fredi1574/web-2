const display = document.querySelector("#input");
let expression = "";

function clearDisplay() {
  display.innerText = "";
}

function appendToDisplay(value) {
  if (display.innerText === "Error" || display.innerText === "NaN") {
    display.innerText = "";
  }
  if (value === "^") {
    value = "**";
  }
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

function squareRoot() {
  display.innerText = Math.sqrt(display.innerText);
}

function negate() {
  display.innerText *= -1;
}

function powerTen() {
  display.innerText = Math.pow(10, display.innerText);
}

function logarithm() {
  display.innerText = Math.log(display.innerText);
}

function naturalLogarithm() {
  display.innerText = Math.log10(display.innerText);
}

function sine() {
  display.innerText = Math.sin(display.innerText);
}

function cosine() {
  display.innerText = Math.cos(display.innerText);
}

function tangent() {
  display.innerText = Math.tan(display.innerText);
}
