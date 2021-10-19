function solve() {

  let buttonElement = document.querySelector(".action .form-control button");
  buttonElement.addEventListener("click", (e) => {

    e.preventDefault();
    // Extracting the fields information
    let lectureName = document.querySelector("input[name='lecture-name']").value;
    let lectureDate = document.querySelector("input[name='lecture-date']").value;
    let lectureModule = document.querySelector("select[name='lecture-module']").value;

    // Correction of the date to meet the example
    let [date, time] = lectureDate.split('T')
    let correctedDate = date.replace(/-/g, '/');
    let dateString = `${correctedDate} - ${time}`;

    if (!lectureName || !lectureDate || lectureModule === "Select module") {
      return;
    };

    // Create li element
    let liElement = document.createElement('li');
    liElement.classList.add('flex');
    let headElement = document.createElement('h4');
    headElement.textContent = `${lectureName} - ${dateString}`;
    headElement.classList.add(dateString.split(' - ')[0]);
    let buttonElement = document.createElement('button');
    buttonElement.classList.add('red');
    buttonElement.textContent = 'Del';
    liElement.appendChild(headElement);
    liElement.appendChild(buttonElement);

    // Check for existing modules
    let checkh3 = Array.from(document.querySelectorAll('.modules .module h3'));
    let newhead3Element = document.createElement('h3');
    newhead3Element.textContent = `${lectureModule.toUpperCase()}-MODULE`;
  
    // Find the current modele and work inside it
    for (let i of checkh3) {
      if (i.textContent == newhead3Element.textContent) {
        let keyUlElement = i.nextElementSibling;
        keyUlElement.appendChild(liElement);

        // Sorting
        let newKeyUlElement = document.createElement('ul');
        // console.log(keyUlElement.childNodes[0].childNodes[0].textContent);
        let listOfLi = Array.from(keyUlElement.childNodes);
          listOfLi
          .sort((a, b) => a.childNodes[0].className.localeCompare(b.childNodes[0].className))
          .forEach(every => keyUlElement.appendChild(every))
        return;
      }
    };

    let ulElement = document.createElement('ul');
    ulElement.appendChild(liElement);
  
    // Module creation
    let divElement = document.createElement('div');
    divElement.classList.add('module');
    let head3Element = document.createElement('h3');
    head3Element.textContent = `${lectureModule.toUpperCase()}-MODULE`;
    divElement.appendChild(head3Element);
    divElement.appendChild(ulElement);
    

    let modules = document.querySelector('.modules');
    modules.appendChild(divElement); 


    // Delete lectures VERY GOOD APPROACH!
    document.addEventListener('click', (e) => {

      let delButton = e.target;
      let li = delButton.parentNode;
      let ul = li.parentNode;

      if (delButton.tagName !== 'BUTTON') {
        return; 
      }
      if (delButton.textContent === 'Del') {
        li.remove();

        // Delete the whole module if empty
        if (ul.children.length === 0) {
          ul.parentNode.remove();
        }
      }
    });

  });
}
