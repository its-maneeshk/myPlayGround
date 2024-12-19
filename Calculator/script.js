let initialValue = '';

function appendNumber(number) {
    if(initialValue === '0') {
        initialValue = number.toSting();
    } else {
        initialValue += number.toString();
    }
    displayResult();
}


function displayResult() {
    document.getElementById('displayAnswer').value = initialValue;
}