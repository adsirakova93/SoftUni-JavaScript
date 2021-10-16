function solve(){
   let createButton = document.querySelector('.btn.create');
   createButton.addEventListener('click', (e) => {
      e.preventDefault();

      let author = document.querySelector('#creator').value;
      let title = document.querySelector('#title').value;
      let category = document.querySelector('#category').value;
      let content = document.querySelector('#content').value;

      let h1 = document.createElement('h1');
      h1.textContent = title;
      let newCategory = document.createElement('p');
      newCategory.textContent = 'Category:';
      let strong = document.createElement('strong');
      strong.textContent = category;
      newCategory.appendChild(strong);
      let creator = document.createElement('p');
      creator.textContent = 'Creator:';
      let strongCreator = document.createElement('strong');
      strongCreator.textContent = author;
      creator.appendChild(strongCreator);
      let newContent = document.createElement('p');
      newContent.textContent = content;

      let newButtons = document.createElement('div');
      newButtons.classList.add('buttons');
      let deleteBtn = document.createElement('button');
      deleteBtn.classList.add('btn', 'delete');

      deleteBtn.addEventListener('click', (e) => {
      let deleteButton = e.target;
      let articleToDolete = deleteButton.parentElement.parentElement;
      articleToDolete.remove();
      });

      deleteBtn.textContent = 'Delete';
      newButtons.appendChild(deleteBtn);

      let archive = document.createElement('button');
      archive.classList.add('btn', 'archive');
      archive.textContent = 'Archive';
      newButtons.appendChild(archive);
      archive.addEventListener('click' , (e) => {
         let archiveButton = e.target;
         let newLi = document.createElement('li');
         newLi.textContent = title;
         let articleTosDolete = archiveButton.parentElement.parentElement;
         articleTosDolete.remove();

         let currentLi = document.querySelector('.archive-section ol');
         let listOfLi = Array.from(currentLi.querySelectorAll('li'));   // Array.from( ) + All
         listOfLi.push(newLi);
         listOfLi
            .sort((a,b) => a.textContent.localeCompare(b.textContent))
            .forEach(li => currentLi.appendChild(li));
      });

      let newArt = document.createElement('article');
      newArt.appendChild(h1);
      newArt.appendChild(newCategory);
      newArt.appendChild(creator);
      newArt.appendChild(newContent);
      newArt.appendChild(newButtons);

      let domTree = document.querySelector('.site-content main section');
      domTree.appendChild(newArt);
   });
}
