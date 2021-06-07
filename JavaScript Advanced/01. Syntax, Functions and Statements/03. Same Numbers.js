function checkSameNumbers(num) {
    let numString = String(num);
    let isSame = true;
    let sum = Number(numString[0]);

    for (let i = 0; i < numString.length - 1; i++) {
        const current = Number(numString[i]);
        const nextNum = Number(numString[i + 1]);
        if (current !== nextNum) {
            isSame = false;
        }
        sum += nextNum;
    }

    console.log(isSame);
    console.log(sum);
}

checkSameNumbers(2222222)
checkSameNumbers(1234)