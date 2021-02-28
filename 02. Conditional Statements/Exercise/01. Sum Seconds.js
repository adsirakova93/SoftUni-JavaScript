function sumSeconds(data) {

    let player1 = Number(data[0]);
    let player2 = Number(data[1]);
    let player3 = Number(data[2]);

    let result = player1 + player2 + player3
    let hours = Math.floor(result / 60)
    let minutes = result % 60 + ""
    
    if (minutes.length < 2) {
        minutes = "0" + minutes
    }

    console.log(hours + ":" + minutes)
}


sumSeconds(["35","45","44"])
sumSeconds(["22", "7", "34"])
