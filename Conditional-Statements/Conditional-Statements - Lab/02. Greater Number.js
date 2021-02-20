function greater_num(data) {

    let num1 = Number(data[0]);
    let num2 = Number(data[1]);

    if (num1 > num2) {
        console.log(num1);
    } else {
        console.log(num2);
    }
}

greater_num(["5", "3"])