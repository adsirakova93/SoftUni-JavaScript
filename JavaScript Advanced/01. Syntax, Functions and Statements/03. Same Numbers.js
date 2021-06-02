function checkSameNumbers(num) {
    let numString = String(num);
    let isSame = true;
    let sum = numString.length > 0 ? Number(numString[0]) : 0;
    for (let i = 0; i < numString.length - 1; i++) {
        const current = Number(numString[i]);
        const nextNum = Number(numString[i + 1]);
        if (current !== nextNum) {
            isSame = false;
        }
        sum += nextNum;
    }

    console.log(sum);
    console.log(isSame);
}

checkSameNumbers(2222222)
checkSameNumbers(1234)