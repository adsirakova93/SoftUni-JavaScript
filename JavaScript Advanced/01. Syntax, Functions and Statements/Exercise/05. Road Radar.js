function radar(speed, area) {
    if (area == 'residential') {
        let maxSpeed = 20;
        let overSpeed = speed - maxSpeed;

        if (overSpeed <= 0) {
            return `Driving ${speed} km/h in a ${maxSpeed} zone`
        } else if (overSpeed <= 20) {
            return `The speed is ${overSpeed} km/h faster than the allowed speed of ${maxSpeed} - speeding`
        } else if (overSpeed <= 40) {
            return `The speed is ${overSpeed} km/h faster than the allowed speed of ${maxSpeed} - excessive speeding`
        } else {
            return `The speed is ${overSpeed} km/h faster than the allowed speed of ${maxSpeed} - reckless driving`
        }

    } else if (area == 'city') {
        let maxSpeed = 50;
        let overSpeed = speed - maxSpeed;

        if (overSpeed <= 0) {
            return `Driving ${speed} km/h in a ${maxSpeed} zone`
        } else if (overSpeed <= 20) {
            return `The speed is ${overSpeed} km/h faster than the allowed speed of ${maxSpeed} - speeding`
        } else if (overSpeed <= 40) {
            return `The speed is ${overSpeed} km/h faster than the allowed speed of ${maxSpeed} - excessive speeding`
        } else {
            return `The speed is ${overSpeed} km/h faster than the allowed speed of ${maxSpeed} - reckless driving`
        }

    } else if (area == 'interstate') {
        let maxSpeed = 90;
        let overSpeed = speed - maxSpeed;

        if (overSpeed <= 0) {
            return `Driving ${speed} km/h in a ${maxSpeed} zone`
        } else if (overSpeed <= 20) {
            return `The speed is ${overSpeed} km/h faster than the allowed speed of ${maxSpeed} - speeding`
        } else if (overSpeed <= 40) {
            return `The speed is ${overSpeed} km/h faster than the allowed speed of ${maxSpeed} - excessive speeding`
        } else {
            return `The speed is ${overSpeed} km/h faster than the allowed speed of ${maxSpeed} - reckless driving`
        }

    } else if (area == 'motorway') {
        let maxSpeed = 130;
        let overSpeed = speed - maxSpeed;

        if (overSpeed <= 0) {
            return `Driving ${speed} km/h in a ${maxSpeed} zone`
        } else if (overSpeed <= 20) {
            return `The speed is ${overSpeed} km/h faster than the allowed speed of ${maxSpeed} - speeding`
        } else if (overSpeed <= 40) {
            return `The speed is ${overSpeed} km/h faster than the allowed speed of ${maxSpeed} - excessive speeding`
        } else {
            return `The speed is ${overSpeed} km/h faster than the allowed speed of ${maxSpeed} - reckless driving`
        }
    }
}



console.log(radar(40, 'city'))
console.log(radar(21, 'residential'))
console.log(radar(120, 'interstate'))
console.log(radar(200, 'motorway'))