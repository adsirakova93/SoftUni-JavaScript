function bonusScore(points) {

    let num = Number(points);
    let bonusPoints = 0.0;

    if (num <= 100) {
        bonusPoints = 5;
    }
    else if (num > 100 & num < 1000) {
        bonusPoints = num / 5;
    }
    else if (num > 1000) {
        bonusPoints = num / 10;
    }

    if (num % 2 === 0) {
        bonusPoints += 1;
    }
    if (num % 10 === 5) {
        bonusPoints += 2;
    }

    console.log(bonusPoints)
    console.log(num + bonusPoints)

}


bonusScore(["2703"])
bonusScore(["15875"])