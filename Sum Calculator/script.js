function sumFunction(numA, numB) {
    return numA + numB;
}

function sumCalculator() {
    const firstInput = parseFloat(document.getElementById("firstNumber").value);
    const secondInput = parseFloat(document.getElementById("secondNumber").value);

    if (isNaN(firstInput) || isNaN(secondInput)) {
        document.getElementById("displayResult").innerHTML = "Please enter valid input.";
        return;
    }

    const result = sumFunction(firstInput, secondInput);

    document.getElementById("displayResult").innerHTML = result;
}