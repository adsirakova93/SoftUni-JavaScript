function calc(speed, maxSpeed, overSpeed) {

    if (overSpeed <= 0) {
        console.log(`Driving ${speed} km/h in a ${maxSpeed} zone`)
    } else if (overSpeed <= 20) {
        console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${maxSpeed} - speeding`)
    } else if (overSpeed <= 40) {
        console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${maxSpeed} - excessive speeding`)
    } else {
        console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${maxSpeed} - reckless driving`)
    }

}


function radar(speed, area) {
    if (area == 'residential') {
        let maxSpeed = 20;
        let overSpeed = speed - maxSpeed;
        calc(speed, maxSpeed, overSpeed);



    } else if (area == 'city') {
        let maxSpeed = 50;
        let overSpeed = speed - maxSpeed;
        calc(speed, maxSpeed, overSpeed);

    } else if (area == 'interstate') {
        let maxSpeed = 90;
        let overSpeed = speed - maxSpeed;
        calc(speed, maxSpeed, overSpeed);

    } else if (area == 'motorway') {
        let maxSpeed = 130;
        let overSpeed = speed - maxSpeed;
        calc(speed, maxSpeed, overSpeed);
    }
}

radar(40, 'city')
radar(21, 'residential')
radar(120, 'interstate')
radar(200, 'motorway')