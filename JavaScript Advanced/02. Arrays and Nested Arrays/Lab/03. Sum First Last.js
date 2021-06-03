function calcSum(array) {
    let result = 0;
    let firstNum = Number(array[0]);
    let lastNum = Number(array.pop())

    result = firstNum + lastNum;
    console.log(result);
}

calcSum(['20', '30', '40'])
calcSum(['5', '10'])