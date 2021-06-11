function solve() {
  let textElement = document.getElementById('text').value;
  let namingElement = document.getElementById('naming-convention').value;
  let resultElement = document.getElementById('result');

  if (namingElement == 'Camel Case') {
    resultElement.textContent = textElement.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
  } else if (namingElement == 'Pascal Case') {
    resultElement.textContent = textElement.split(' ')
    .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
    .join('');
    } else {
    resultElement.textContent = 'Error!';
  }
}
