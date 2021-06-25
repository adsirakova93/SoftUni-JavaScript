function solve() {
  let textElement = document.getElementById('input');
  let text = textElement.value.split('.').filter(x => x !== '').map(x => x + '.');
  let outputElement = document.getElementById('output');
  let paraNums = Math.ceil(text.length / 3);

  for (let i = 0; i < paraNums; i++) {
    outputElement.innerHTML += `<p>${text.splice(0, 3).join('')}</p>`;
  }
}