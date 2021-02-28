function toy_shop(data) {
    
    let priceExcursion = Number(data[0]);
    let pusels = Number(data[1]);
    let pupets = Number(data[2]);
    let bears = Number(data[3]);
    let minion = Number(data[4]);
    let truck = Number(data[5]);

    let qty = pusels + pupets + bears + minion + truck
    let total = (pusels * 2.6) + (pupets * 3) + (bears * 4.1) + (minion * 8.2) + (truck * 2)
    
    if (qty >= 50) {
        total = total * 0.75;
    }

    total = total * 0.9;

    if (priceExcursion <= total) {
        console.log(`Yes! ${(total - priceExcursion).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(priceExcursion - total).toFixed(2)} lv needed.`)
    }

}

toy_shop(["40.8", "20", "25", "30", "50", "10"])