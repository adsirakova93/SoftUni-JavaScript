function toggle() {
    let buttonElement = document.getElementById('accordion');
    let textToChange = buttonElement.firstElementChild.firstElementChild;
    let pannelWithText = document.getElementById('extra');

    if (textToChange.textContent == 'More') {
        pannelWithText.style.display = 'block';
        textToChange.textContent = 'Less';
    } else {
        pannelWithText.style.display = 'none';
        textToChange.textContent = 'More';
    };
}