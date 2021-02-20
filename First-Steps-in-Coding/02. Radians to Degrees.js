function radius_to_graduses(radiuses) {

    let radius = Number(radiuses);
    let pi = Math.PI;
    let gradus = radius * (180 / pi);
    console.log(gradus.toFixed(0));

}

radius_to_graduses(["3.1416"])