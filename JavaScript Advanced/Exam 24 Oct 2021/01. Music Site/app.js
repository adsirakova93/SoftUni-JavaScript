window.addEventListener('load', solve);

function solve() {
    let addBtn = document.querySelector('#add-btn');
    let savedCont = document.querySelector('.saved-container');
    let likesDiv = document.querySelector('.likes');

    addBtn.addEventListener('click', (e) => {
        e.preventDefault()

        let genreEl = document.querySelector('#genre');
        let nameEl = document.querySelector('#name');
        let authorEl = document.querySelector('#author');
        let dateEl = document.querySelector('#date');

        let allHits = document.querySelector('.all-hits-container');
        

        if (!genreEl.value || !nameEl.value || !authorEl.value || !dateEl.value) {
            return;
        }

        let genre = genreEl.value;
        let name = nameEl.value;
        let author = authorEl.value;
        let date = dateEl.value;



        let h2 = document.createElement('h2');
        h2.textContent = `Genre: ${genre}`;
        let newName = document.createElement('h2');
        newName.textContent = `Name: ${name}`;
        let newAuthor = document.createElement('h2');
        newAuthor.textContent = `Author: ${author}`;
        let newDate = document.createElement('h3');
        newDate.textContent = `Date: ${date}`;

        let hitsInfo = document.createElement('div');
        hitsInfo.className = "hits-info";
        hitsInfo.innerHTML = '<img src="./static/img/img.png">'

        hitsInfo.appendChild(h2);
        hitsInfo.appendChild(newName);
        hitsInfo.appendChild(newAuthor);
        hitsInfo.appendChild(newDate);

        let saveBtn = document.createElement('button');
        saveBtn.className = "save-btn";
        saveBtn.textContent = "Save song";
        saveBtn.addEventListener('click', saveSong);

        let likeBtn = document.createElement('button');
        likeBtn.className = "like-btn";
        likeBtn.textContent = "Like song";
        likeBtn.addEventListener('click', likeSong);

        let deleteBtn = document.createElement('button');
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener('click', deleteSong);

        hitsInfo.appendChild(saveBtn);
        hitsInfo.appendChild(likeBtn);
        hitsInfo.appendChild(deleteBtn);

        allHits.appendChild(hitsInfo);


        genreEl.value = '';
        nameEl.value = '';
        authorEl.value = '';
        dateEl.value = '';

    })


    function deleteSong(e) {
        e.currentTarget.parentElement.remove();
    }

    function saveSong(e) {
        let divHitsInfo = e.currentTarget.parentElement;
        let likeToDelete = divHitsInfo.querySelector('.like-btn');
        let saveToDelete = divHitsInfo.querySelector('.save-btn');
        likeToDelete.remove();
        saveToDelete.remove();
        savedCont.appendChild(divHitsInfo);
     }

    function likeSong(e) {
        let divHitsInfo = e.currentTarget.parentElement;
        let likeToDelete = divHitsInfo.querySelector('.like-btn');
        likeToDelete.disabled = true;
        let pLikes = likesDiv.querySelector('p');
        let [textLikes, num] = pLikes.textContent.split(":");
        let corrected = Number(num);
        corrected++;
        let newTextLikes = document.createElement('p');
        newTextLikes.textContent = `${textLikes}: ${corrected}`;
        likesDiv.innerHTML = ''

        let newImg = document.createElement('img');
        newImg.src = `./static/img/like-btn.jpg`;
        newImg.alt = `image-like`;
        likesDiv.appendChild(newTextLikes);
        likesDiv.appendChild(newImg);
     }
}