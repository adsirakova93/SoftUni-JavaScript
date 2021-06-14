function solve() {
  let textElement = document.getElementById('input');
  let text = textElement.value.split('.');
  let outputElement = document.getElementById('output');

  let para = document.createElement('P');
  para.innerText = textElement.value;
  outputElement.appendChild(para);
}