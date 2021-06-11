function subtract() {
    let firstNumberElement = document.getElementById('firstNumber');
    let secondNumberElement = document.getElementById('secondNumber');
    let resultElement = document.getElementById('result');

    let firstNum = firstNumberElement.value;
    let secondNum = secondNumberElement.value;
    resultElement.textContent = Number(firstNum) - Number(secondNum);
}