function solve() {
    let [addSection, openSection, progressSection, completedSection] = document.querySelectorAll('section');
    
    let addBtn = addSection.querySelector('#add');
    addBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let task = document.querySelector('#task');
        let description = document.querySelector('#description');
        let date = document.querySelector('#date');

        if (task.value === "" || description.value === "" || date.value === "") {
            return;
        }

        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.textContent = task.value;
        let pDescription = document.createElement('p');
        pDescription.textContent = `Description: ${description.value}`;
        let pDate = document.createElement('p');
        pDate.textContent = `Due Date: ${date.value}`;

        let div = document.createElement('div');
        div.className = 'flex';
        let btnStart = document.createElement('button');
        btnStart.className = 'green';
        btnStart.textContent = 'Start';
        let btnDelete = document.createElement('button');
        btnDelete.className = 'red';
        btnDelete.textContent = 'Delete';

        btnDelete.addEventListener('click', deleteArticle);

        btnStart.addEventListener('click', (e) => {
            let btnFinish = document.createElement('button');
            btnFinish.className = 'orange';
            btnFinish.textContent = 'Finish';

            btnFinish.addEventListener('click', () => {
                article.lastElementChild.remove();
                completedSection.lastElementChild.appendChild(article);
            });

            article.lastElementChild.children[0].remove();
            article.lastElementChild.appendChild(btnFinish);
            progressSection.lastElementChild.appendChild(article);
        });

        div.appendChild(btnStart);
        div.appendChild(btnDelete);

        article.appendChild(h3);
        article.appendChild(pDescription);
        article.appendChild(pDate);
        article.appendChild(div)

        openSection.lastElementChild.appendChild(article);

        task.value = '';
        description.value = '';
        date.value = '';
    });

    function deleteArticle(e) {
        e.target.parentElement.parentElement.remove();
    }
}