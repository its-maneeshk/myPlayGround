let initialValue = 0;

function appendNumber(number) {
    if (initialValue === 0 || initialValue === '') {
        initialValue = number.toString();
    } else {
        initialValue += number.toString();
    }
    displayResult();
}

function appendOperator(operator) {
    initialValue += operator;
    displayResult();
}

function appendDecimal(decimal) {
    initialValue += decimal;
    displayResult();
}

function clearScreen() {
    initialValue = '';
    displayResult();
}

function backSpace() {
    if (initialValue === '') {
        const messageElement = document.getElementById('errorMessage');
        messageElement.innerText = "Nothing to clear in screen";
        messageElement.style.color = 'crimson';
        messageElement.style.textAlign = 'right';
        messageElement.style.backgroundColor = 'yellow';

        setTimeout(() => {
            messageElement.innerText = '';
            messageElement.style = '';
        }, 900);
    } else {
        initialValue = initialValue.slice(0, -1);
    }
    displayResult();
}

function calculateResult() {
    const resultStore = eval(initialValue);
    initialValue = resultStore;
    displayResult();
}
function displayResult() {
    const finalResultStore = document.getElementById('answerScreen');

    finalResultStore.value = initialValue;
    finalResultStore.style.color = 'crimson';
}
