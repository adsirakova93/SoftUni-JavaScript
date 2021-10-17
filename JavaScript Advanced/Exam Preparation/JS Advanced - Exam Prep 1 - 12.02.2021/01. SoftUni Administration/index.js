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
    let buttonElement = document.createElement('button');
    buttonElement.classList.add('red');
    buttonElement.textContent = 'Del';
    liElement.appendChild(headElement);
    liElement.appendChild(buttonElement);

    // Check for existing modules
    let checkh3 = Array.from(document.querySelectorAll('.modules .module h3'));
    let newhead3Element = document.createElement('h3');
    newhead3Element.textContent = `${lectureModule.toUpperCase()}-MODULE`;
  
    // BRAVO !!!
    for (const i of checkh3) {
      if (i.textContent == newhead3Element.textContent) {
        let keyElement = i.nextElementSibling;
        keyElement.appendChild(liElement);

        // Sorting
        // let findAllLiElements = Array.from(i.nextElementSibling.children);

        // findAllLiElements
        //   .sort((a,b) => a.firstChild.textContent.localeCompare(b.firstChild.textContent))
        //   .forEach(li => keyElement.appendChild(li))
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
      let moduleDiv = ul.parentNode;

      if (delButton.tagName !== 'BUTTON') {
        return; 
      }
      if (delButton.textContent === 'Del') {
        li.remove();

        // Delete the whole module if empty
        if (ul.children.length === 0) {
          moduleDiv.remove();
        }
      }
    });

  });
}
