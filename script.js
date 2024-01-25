const display = document.querySelector("#input");

function clearDisplay() {
  display.innerText = "";
}

function appendToDisplay(value) {
  // If the display is "Error" or "NaN", clear it before appending the new value
  if (display.innerText === "Error" || display.innerText === "NaN") {
    display.innerText = "";
  }

  display.innerText += value;
}

function deleteLast() {
  // Remove the last character from the display
  display.innerText = display.innerText.slice(0, -1);
}

function calculate() {
  // Replace all special characters with their corresponding values
  display.innerText = display.innerText.replaceAll("^", "**");
  display.innerText = display.innerText.replaceAll("×", "*");
  display.innerText = display.innerText.replaceAll("÷", "/");
  display.innerText = display.innerText.replaceAll("π", Math.PI);

  // Evaluate the expression and display the result
  display.innerText = eval(display.innerText);
  if (display.innerText === "NaN") {
    display.innerText = "Error";
  }
}

function squareRoot() {
  display.innerText = Math.sqrt(display.innerText);
}

function negate() {
  // Multiply the current value by -1
  display.innerText *= -1;
}

function powerTen() {
  // Raise the current value to the power of 10
  display.innerText = Math.pow(10, display.innerText);
}

function logarithm() {
  // Calculate the logarithm of the current value
  display.innerText = Math.log10(display.innerText);
}

function naturalLogarithm() {
  // Calculate the natural logarithm of the current value
  display.innerText = Math.log(display.innerText);
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
