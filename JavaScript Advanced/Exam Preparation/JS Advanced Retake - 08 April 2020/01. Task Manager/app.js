function solve() {

    let [addSection, openSection, inProgress, completedP] = Array.from(document.querySelectorAll('section'));
    let addBtn = addSection.querySelector('#add');
    addBtn.addEventListener('click', (e) => {
        e.preventDefault();

        let taskEl = document.querySelector('#task');
        let descriptionEl = document.querySelector('#description');
        let dateEl = document.querySelector('#date');

        let h3 = document.createElement('h3');
        h3.textContent = taskEl.value;
        let descP = document.createElement('p');
        descP.textContent = `Description: ${descriptionEl.value}`;
        let dateP = document.createElement('p');
        dateP.textContent = `Due Date: ${dateEl.value}`;
        let buttonsDiv = document.createElement('div');
        buttonsDiv.className = 'flex';
        buttonsDiv.innerHTML = `
        <button class="green">Start</button>
        <button class="red">Delete</button>`

        let article = document.createElement('article');
        article.appendChild(h3);
        article.appendChild(descP);
        article.appendChild(dateP);
        article.appendChild(buttonsDiv)

        openSection.lastElementChild.appendChild(article);

        taskEl.value = "";
        descriptionEl.value = "";
        dateEl.value = "";

        let deleteBtn = openSection.querySelector(".red");
        deleteBtn.addEventListener('click', deletePanel);

        let startBtn = openSection.querySelector(".green");
        startBtn.addEventListener('click', sendInProgress);
    });

    function sendInProgress(e) {
        let inPr = inProgress.querySelector('#in-progress');
        inPr.remove();
        let taskP = e.currentTarget.parentNode.parentNode;
        inProgress.appendChild(taskP);
        let green = inProgress.querySelector('.green');
        green.className = 'orange';
        green.textContent = 'Finish';
        let flexEl = green.parentElement;
        flexEl.appendChild(green);

        green.addEventListener('click', completedTask);
    }

    function deletePanel(e) {
        e.currentTarget.parentNode.parentNode.remove();
    }

    function completedTask(e) {
        let taskC = e.currentTarget.parentNode.parentNode;
        completedP.appendChild(taskC);
        let button1 = completedP.querySelector('button');
        button1.remove();
        let button2 = completedP.querySelector('button');
        button2.remove();
    }
}

