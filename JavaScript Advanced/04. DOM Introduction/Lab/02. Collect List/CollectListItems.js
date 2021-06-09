function extractText() {
    let liItems = document.querySelectorAll('li');
    let textSelect = document.getElementById('result');
    for (let each of liItems) {
        textSelect.value += each.textContent + '\n';
    }
}