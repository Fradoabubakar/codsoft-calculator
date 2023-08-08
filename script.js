let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    updateDisplay();
}

function calculate() {
  try {
    const result = eval(displayValue);
    displayValue = result.toString();
    updateDisplay();
  } catch (error) {
    displayValue = 'Error';
      updateDisplay();
  }
}

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('result').value = displayValue;
}
function clearLastDigit() {
    if (displayValue.length > 0) {
      displayValue = displayValue.slice(0, -1);
      updateDisplay();
    }
  }
  