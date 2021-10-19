function solution() {
    document.querySelector('button').addEventListener('click', addGifts);


    function addGifts() {
        let input = document.querySelector('input');
        let giftName = input.value;
        sendGifts(giftName);
        input.value = ''
    }
    
    function sendGifts(giftName) {
        let giftPannel = document.querySelectorAll('section')[1];
        let giftUi = giftPannel.querySelector('ul');
        let newGiftLi = document.createElement('li');
        newGiftLi.classList.add('gift');
        newGiftLi.classList.add('giftName');
        newGiftLi.textContent = giftName;
        
        let sendButton = document.createElement('button');
        sendButton.textContent = 'Send';
        sendButton.id = "sendButton";
        newGiftLi.appendChild(sendButton);
        let discardButton = document.createElement('button');
        discardButton.textContent = 'Discard';
        discardButton.id = 'discardButton';
        newGiftLi.appendChild(discardButton);
        giftUi.appendChild(newGiftLi);
        sendButton.addEventListener('click', () => sendingEl(giftName));
        discardButton.addEventListener('click', () => discardingEl(giftName))
        let allLis = Array.from(document.querySelectorAll('.gift'));
        allLis
        .sort((a, b) => a.textContent.localeCompare(b.textContent))
        .forEach(li => giftUi.appendChild(li)
        );       
    }
    
    function sendingEl(giftName) {
        document.querySelector('.giftName').remove();
        let sentPannel = document.querySelectorAll('section')[2];
        let currentUl = sentPannel.querySelector('ul');
        let newLi = document.createElement('li');
        newLi.textContent = giftName;
        currentUl.appendChild(newLi);
    }
    
    function discardingEl(giftName) {
        document.querySelector('.giftName').remove();
        let sentPannel2 = document.querySelectorAll('section')[3];
        let currentUl2 = sentPannel2.querySelector('ul');
        let newLi2 = document.createElement('li');
        newLi2.textContent = giftName;
        currentUl2.appendChild(newLi2);
    }

}

