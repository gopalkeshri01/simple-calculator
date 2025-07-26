function getInputValues() {
    const n1 = parseFloat(document.getElementById('num1').value);
    const n2 = parseFloat(document.getElementById('num2').value);
    return [n1, n2];
}


function add() {
    const [n1, n2] = getInputValues();
    document.getElementById('result').innerText = "Result: " + (n1 + n2);
}

function subtract() {
    const [n1, n2] = getInputValues();
    document.getElementById('result').innerText = "Result: " + (n1 - n2);
}

function multiply() {
    const [n1, n2] = getInputValues();
    document.getElementById('result').innerText = "Result: " + (n1 * n2);
}


function divide() {
    const [n1, n2] = getInputValues();
    if (n2 === 0) {
        document.getElementById('result').innerText = "Result: Cannot divide by zero";
    } else {
        document.getElementById('result').innerText = "Result: " + (n1 / n2);
    }
}
