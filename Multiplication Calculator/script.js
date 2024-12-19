function multiplicationFunction(valueA, valueB) {
    return valueA * valueB;
}

function resultFunction() {
    const firstInputNumber = parseFloat(document.getElementById("firstInput").value);
    const secondInputNumber = parseFloat(document.getElementById("secondInput").value);

    if(document.getElementById("firstInput").value === "" || document.getElementById("secondInput").value === "") {
        document.getElementById("display").value = "PLEASE ENSURE BOTH THE BOXES HAVE VALID INPUT";
        return;
    }

    if (isNaN(firstInputNumber)) {
        document.getElementById("display").value = "PLEASE USE VALID INPUT IN FIRST INPUT BOX";
        return;
    } else if (isNaN(secondInputNumber)) {
        document.getElementById("display").value = "PLEASE USE VALID INPUT IN SECOND INPUT BOX";
        return;
    } else {
        document.getElementById("display").value = "ERROR FOUND";
        return;
    }

    const result = multiplicationFunction(firstInputNumber, secondInputNumber);

    document.getElementById("display").value = result;
}6