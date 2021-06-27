function solution() {

  let submitButtonElement = document.getElementById('submitBTN');
  submitButtonElement.addEventListener('click', newSolution);

  function newSolution() {
    let nameElement = document.getElementById('fname');
    // console.log(nameElement);
    // nameElement.setAttribute('required', '');
    let emailElement = document.getElementById('email');
    let phoneElement = document.getElementById('phone');
    let addressElement = document.getElementById('address');
    let codeElement = document.getElementById('code');

  // Required fields Name Email
    // nameElement.children.setAttribute("required");
    // emailElement.setAttribute("required");
  
  
  // Send information
    let editButtonElement = document.getElementById('editBTN');
    let continueButtonelement = document.getElementById('continueBTN');
  
  // Create info
    let newNameField = document.createElement('li');
    let newEmailField = document.createElement('li');
    let newPhoneField = document.createElement('li');
    let newAddressField = document.createElement('li');
    let newCodeField = document.createElement('li');

    let name = nameElement.value;
    let email = emailElement.value;
    let phone = phoneElement.value;
    phone = Number(phone);
    let address = addressElement.value;
    let code = codeElement.value;
    code = Number(code);
  
  // Adding text to the new form
    newNameField.textContent = `Full Name: ` + name;
    newEmailField.textContent = `Email: ` + email;
    newPhoneField.textContent = `Phone Number: ` + phone;
    newAddressField.textContent = `Address: ` + address;
    newCodeField.textContent = `Postal Code: ` + code;
  
  // Attaching the fields to the form
    infoPreviewElement = document.getElementById('infoPreview');
    infoPreviewElement.appendChild(newNameField);
    infoPreviewElement.appendChild(newEmailField);
    infoPreviewElement.appendChild(newPhoneField);
    infoPreviewElement.appendChild(newAddressField);
    infoPreviewElement.appendChild(newCodeField);
  
    submitButtonElement.setAttribute('disabled', 'true');
    nameElement.value = '';
    emailElement.value = '';
    phoneElement.value = '';
    addressElement.value = '';
    codeElement.value = '';
  
  // Enable the form buttons
    editButtonElement.removeAttribute('disabled');
    continueButtonelement.removeAttribute('disabled');

    editButtonElement.addEventListener('click', edit);
    continueButtonelement.addEventListener('click', continew);


    function edit() {
      nameElement.value = name;
      emailElement.value = email;
      phoneElement.value = phone;
      addressElement.value = address;
      codeElement.value = code;

      newNameField.textContent = '';
      newEmailField.textContent = '';
      newPhoneField.textContent = '';
      newAddressField.textContent = '';
      newCodeField.textContent = '';

      editButtonElement.setAttribute('disabled', 'true');
      continueButtonelement.setAttribute('disabled', 'true');
      submitButtonElement.removeAttribute('disabled');

      newNameField.remove();
      newEmailField.remove();
      newPhoneField.remove();
      newAddressField.remove();
      newCodeField.remove();
    }

    function continew() {
      let blockElement = document.getElementById('block');
      blockElement.remove();
      let newBlock = document.createElement('div');
      newBlock.setAttribute('id', 'block');
      let bodyElement = document.querySelector('body');
      bodyElement.appendChild(newBlock);
      let newHEl = document.createElement('h3');
      newHEl.textContent = 'Thank you for your reservation!'
      newBlock.appendChild(newHEl);
    }

  }

 

}
