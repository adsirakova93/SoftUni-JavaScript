function extract() {

    let result = [];
    let contentElement = document.getElementById('content');
    let contentElementText = contentElement.textContent;

    let txt = contentElementText;
    let newTxt = txt.split('(');
    for (let i = 1; i < newTxt.length; i++) {
    result.push(newTxt[i].split(')')[0] + '; ');
    };
    return result.join('')
}