function calcultor(input) {

    let deposit = Number(input[0]);
    let months = Number(input[1]);
    let rate = Number(input[2] / 100);
    let total = deposit + months * ((deposit * rate) / 12)
    console.log(total.toFixed(2))

}

calcultor(["200", "3", "5.7"])
