function market(data) {

    let priceStrowberries = Number(data[0]);
    let kgBananas = Number(data[1]);
    let kgOranges = Number(data[2]);
    let kgRaspberries = Number(data[3]);
    let kgStrowberries = Number(data[4]);

    let priceRaspberries = priceStrowberries / 2;
    let priceOranges = priceRaspberries - (priceRaspberries * 0.4);
    let priceBananas = priceRaspberries - (priceRaspberries * 0.8);

    let money = (kgBananas * priceBananas) + (kgOranges * priceOranges)
        + (kgRaspberries * priceRaspberries) + (kgStrowberries * priceStrowberries)

    console.log(money)


}

market(["48", "10", "3.3", "6.5", "1.7"])
