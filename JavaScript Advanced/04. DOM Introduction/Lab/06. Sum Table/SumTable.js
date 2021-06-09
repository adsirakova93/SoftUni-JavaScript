function sumTable() {
    let sum = 0;

    let numbers = document.querySelectorAll('td');
    let totalField = document.getElementById('sum')
    for (let i = 0; i < numbers.length; i += 2) {
        sum += Number(numbers[i+1].textContent);
    }
    totalField.textContent = sum;
}