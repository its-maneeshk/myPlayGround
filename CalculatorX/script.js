let displayValue = '0';

function appendNumber(number) {
    if (displayValue === '0') {
        displayValue = number.toString();
    } else {
        displayValue += number.toString();
    }
    updateDisplay();
}

function appendOperator(operator) {
    displayValue += operator;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1) || '0';
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue); // Evaluate the expression
        updateDisplay();
    } catch (e) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}