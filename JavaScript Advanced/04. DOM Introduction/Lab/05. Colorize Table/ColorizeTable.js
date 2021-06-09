function colorize() {
    let allTrElements = document.querySelectorAll('tr');
    for (let i = 1; i < allTrElements.length; i++) {
        if (i % 2 != 0){
            allTrElements[i].style.backgroundColor = "Teal";
        }
    }
}