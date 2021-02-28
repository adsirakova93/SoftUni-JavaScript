function calculate_areas(data) {

    let type = data[0];
    let size1 = Number(data[1]);


    if (type === "square") {
        console.log(size1 * size1);
    } else if (type === "rectangle") {
        let size2 = Number(data[2]);
        console.log(size1 * size2);
    } else if (type === "circle") {
        let pi = Math.PI;
        console.log(pi * size1 * size1);
    } else if (type === "triangle") {
        let size2 = Number(data[2]);
        console.log(size1 * (size2 / 2))
    }

}

(["square", "5"])