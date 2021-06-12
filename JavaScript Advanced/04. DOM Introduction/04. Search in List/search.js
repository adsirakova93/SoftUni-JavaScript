function search() {
   let searchElementText = document.getElementById('searchText').value;
   searchElementText = searchElementText.toLowerCase();
   let liElements = document.getElementById('towns').children;
   let resultElent = document.getElementById('result');
   let counter = 0

   for (let i = 0; i < liElements.length; i++) {
      if (liElements[i].textContent.toLowerCase().includes(searchElementText)) {
         liElements[i].style.textDecoration = 'underline';
         liElements[i].style.fontWeight = 'bold';
         counter += 1;
      }
   }
   resultElent.textContent = `${counter} matches found`
}
