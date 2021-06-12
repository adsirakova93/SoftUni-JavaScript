function toggle() {
    let buttonElement = document.getElementById('accordion');
    let textToChange = buttonElement.firstElementChild.firstElementChild.textContent;
    let pannelWithText = document.getElementById('extra');

    if (textToChange == "More") {
        pannelWithText.style.display = 'inline';
        console.log(textToChange)
        textToChange.value = 'Less';
    }


}   