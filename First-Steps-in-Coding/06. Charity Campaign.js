function charity(data){

    let days = Number(data[0]);
    let cheefs = Number(data[1]);
    let cakes = Number(data[2] * 45);
    let gofrets = Number(data[3] * 5.8);
    let pancakes = Number(data[4] * 3.2);

    let income = cheefs * (cakes + gofrets + pancakes) * days;
    let cost = income / 8;
    let finalMoney = income - cost;

    console.log(finalMoney);


}

charity(["23","8","14","30","16"])
