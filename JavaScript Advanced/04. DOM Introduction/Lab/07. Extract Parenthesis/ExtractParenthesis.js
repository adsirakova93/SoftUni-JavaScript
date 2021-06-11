function extract(content) {

    let result = [];
    let contentElement = content;
    let buttonElement = document.querySelector('button')[0];
    let contentElementText = contentElement.textContent;

    let txt = contentElementText;
    let newTxt = txt.split('(');
    for (let i = 1; i < newTxt.length; i++) {
    result.push(newTxt[i].split(')')[0] + '; ');
    };
    console.log(result.join(''))
}