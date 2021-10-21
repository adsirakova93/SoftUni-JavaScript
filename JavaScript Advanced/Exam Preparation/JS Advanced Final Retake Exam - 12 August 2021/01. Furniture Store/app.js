window.addEventListener('load', solve);

function solve() {
    let btnAdd = document.querySelector('#add');
    let tPrice = document.querySelector('.total-price');
    let funtitureList2 = document.querySelector('#furniture-list');
    let comment = `<!--Information about furniture-->`
    funtitureList2.innerHTML = comment;
    
    btnAdd.addEventListener('click', (e) => {
    
        e.preventDefault();
        let model = document.querySelector('#model');
        let year = document.querySelector('#year');
        let description = document.querySelector('#description');
        let price = document.querySelector('#price');

        if (!Number(price.value)) {
            return;
        }

        if (price.value < 0 || year.value < 0) {
            return;
        }

        if (!model.value || !year.value || !description.value || !price.value) {
            return;
        }

        let funtitureList = document.querySelector('#furniture-list');
        let tdButtons = document.createElement('td');
        let moreBtn = document.createElement('button');
        moreBtn.textContent = 'More Info';
        moreBtn.className = 'moreBtn';
        moreBtn.addEventListener('click', moreInfo);

        let buyBtn = document.createElement('button');
        buyBtn.textContent = 'Buy it';
        buyBtn.className = 'buyBtn';
        buyBtn.addEventListener('click', buyFunc);

        tdButtons.appendChild(moreBtn);
        tdButtons.appendChild(buyBtn);

        let trInfo = document.createElement('tr');
        trInfo.className = 'info';
        let tdModel = document.createElement('td');
        tdModel.textContent = `${model.value}`;
        let tdPrice = document.createElement('td');
        let roughPrice = parseFloat(price.value);
        let correctedPrice = roughPrice.toFixed(2);
        tdPrice.textContent = `${correctedPrice}`;
        trInfo.appendChild(tdModel);
        trInfo.appendChild(tdPrice);
        trInfo.appendChild(tdButtons);

        funtitureList.appendChild(trInfo);

        let trHide = document.createElement('tr');
        trHide.className = 'hide';
        let tdYear = document.createElement('td');
        tdYear.textContent = `Year: ${year.value}`;
        let tdDescr = document.createElement('td');
        tdDescr.colSpan = 3;
        tdDescr.textContent = `Description: ${description.value}`;
        trHide.appendChild(tdYear);
        trHide.appendChild(tdDescr);

        funtitureList.appendChild(trHide);

        model.value = '';
        year.value = '';
        description.value = '';
        price.value = '';
    });

    function moreInfo(e) {
        let keyBtn = e.target;

        let lessInfoBtn = document.createElement('button');
        lessInfoBtn.textContent = 'Less Info';
        lessInfoBtn.className = 'moreBtn';
        let keyFurniture2 = keyBtn.parentElement.parentElement.nextSibling;
        keyFurniture2.style.display = 'contents';

        let parentTd = keyBtn.parentElement;
        let currentBuyBtn = parentTd.querySelector('.buyBtn');
        parentTd.appendChild(lessInfoBtn);
        parentTd.appendChild(currentBuyBtn);
        lessInfoBtn.addEventListener('click', hideAgain);

        keyBtn.remove();

    }

    function hideAgain(e) {
        let moreInfoBtn = e.target;
        moreInfoBtn.textContent = "More Info";
        let keyFurniture = moreInfoBtn.parentElement.parentElement.nextSibling;
        keyFurniture.style.display = 'none';
        moreInfoBtn.addEventListener('click', moreInfo);
    }

    function buyFunc(e) {
        
        let toDel = e.target;
        let cPrice = e.target.parentElement.parentElement.children[1];
        let totalValue = parseFloat(tPrice.textContent);
        let currentValue = parseFloat(cPrice.textContent);
        let totalSum = totalValue + currentValue;
        tPrice.textContent = totalSum.toFixed(2);
        let keytoDel = toDel.parentElement.parentElement.nextElementSibling;
        keytoDel.remove();
        e.target.parentElement.parentElement.remove();
    }   

}
