function meet(data) {

    let first = data[0];
    let second = data[1];
    let age = data[2];
    let city = data[3];
    
    console.log(`You are ${first} ${second}, a ${age}-years old person from ${city}.`)
}

meet(["Kalin", "Petrov", 34, "Sofia"])