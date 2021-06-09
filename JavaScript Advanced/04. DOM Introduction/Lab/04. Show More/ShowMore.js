function showText() {
    let showMoreElement = document.getElementById('more');
    let textElement = document.getElementById('text');
    if (textElement.style.display == 'none'){
        textElement.style.display = 'inline';
        showMoreElement.style.display = 'none';
    } else {
        textElement.style.display = 'none';
    }
}