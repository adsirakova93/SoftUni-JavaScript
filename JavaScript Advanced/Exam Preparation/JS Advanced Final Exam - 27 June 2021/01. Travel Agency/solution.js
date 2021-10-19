window.addEventListener('load', solution);

function solution() {

  let submitBtn = document.querySelector('#submitBTN');
  submitBtn.addEventListener('click', (e)=> {
    e.preventDefault();

    let nameEl = document.querySelector('#fname');
    let name = nameEl.value;
    let emailEl = document.querySelector('#email');
    let email = emailEl.value;
    let phoneEl = document.querySelector('#phone');
    let phone = phoneEl.value;
    let addressEl = document.querySelector('#address');
    let address = addressEl.value;
    let postEl = document.querySelector('#code');
    let post = postEl.value;

    let newName = document.createElement('li');
    newName.textContent = `Full Name: ${name}`;
    let newEmail = document.createElement('li');
    newEmail.textContent = `Email: ${email}`;
    let newPhone = document.createElement('li');
    newPhone.textContent = `Phone Number: ${phone}`;
    let newAddress = document.createElement('li');
    newAddress.textContent = `Address: ${address}`;
    let newPost = document.createElement('li');
    newPost.textContent = `Postal Code: ${post}`;

    let infoPreviewUl = document.querySelector('#infoPreview');
    infoPreviewUl.appendChild(newName);
    infoPreviewUl.appendChild(newEmail);
    infoPreviewUl.appendChild(newPhone);
    infoPreviewUl.appendChild(newAddress);
    infoPreviewUl.appendChild(newPost)

    // Clear the initial values
    nameEl.value = "";
    emailEl.value = "";
    phoneEl.value = "";
    addressEl.value = "";
    postEl.value = "";

    document.querySelector('#submitBTN').disabled = true;
    document.querySelector('#editBTN').disabled = false;
    document.querySelector('#continueBTN').disabled = false;

    let editFBtn = document.querySelector('#editBTN');
    editFBtn.addEventListener('click', edit);
  });

  function edit() {
      let keyEl = document.querySelector('#infoPreview');
      let allLi = Array.from(keyEl.childNodes);
      let name1 = allLi[0].textContent;
      let email1 = allLi[1].textContent;
      let phone1 = allLi[2].textContent;
      let address1 = allLi[3].textContent;
      let post1 = allLi[4].textContent;

      document.querySelector('#submitBTN').disabled = false;
      document.querySelector('#editBTN').disabled = true;
      document.querySelector('#continueBTN').disabled = true;

      let name2 = name1.split(': ')[1];
      let email2 = email1.split(': ')[1];
      let phone2 = phone1.split(': ')[1];
      let address2 = address1.split(': ')[1];
      let post2 = post1.split(': ')[1];

      let nameEl2 = document.querySelector('#fname');
      nameEl2.value = name2;
      let emailEl2 = document.querySelector('#email');
      emailEl2.value = email2;
      let phoneEl2 = document.querySelector('#phone');
      phoneEl2.value = phone2;
      let addressEl2 = document.querySelector('#address');
      addressEl2.value = address2;
      let postEl2 = document.querySelector('#code');
      postEl2.value = post2;

      // Clear the initial values
      allLi[0].textContent = '';
      allLi[1].textContent = '';
      allLi[2].textContent = '';
      allLi[3].textContent = '';
      allLi[4].textContent = '';

      keyEl.innerHTML = '';

      let contBtn = document.querySelector('#continueBTN');
      contBtn.addEventListener('click', final);
    }

    function final() {
      let blockElement = document.querySelector('#block');
      blockElement.innerHTML = '';
      addFinalMessage();
    };

    function addFinalMessage() {
      let blockElement2 = document.querySelector('#block');
      let header3 = document.createElement('h3');
      header3.textContent = 'Thank You For Your Reservation!';
      blockElement2.appendChild(header3);
    }
  }
