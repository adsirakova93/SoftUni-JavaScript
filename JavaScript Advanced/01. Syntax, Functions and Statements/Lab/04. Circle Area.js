function circle(input) {
    let typeInput = typeof(input);

    if (typeInput === "number"){
        let result = Math.PI * (input * input)
        console.log(result.toFixed(2));
    }
    else {
        console.log(`We can not calculate the circle area, because we receive a ${typeInput}.`);
    }
}

circle(5);
circle('name')