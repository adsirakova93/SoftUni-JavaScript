function calc() {
    let numberOne = document.getElementById('num1').value;
    let numberTwo = document.getElementById('num2').value;
    let resultBox = document.getElementById('sum');

    resultBox.value = Number(numberOne) + Number(numberTwo);
}
