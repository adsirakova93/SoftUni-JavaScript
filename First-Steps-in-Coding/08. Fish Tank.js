function fishtank(data) {

    let length = Number(data[0]);
    let width = Number(data[1]);
    let height = Number(data[2]);
    let percentage = Number(data[3] / 100);

    let volume = length * width * height;
    let waterLitters = volume * 0.0001;
    console.log(waterLitters - (waterLitters * percentage));

}

fishtank(["85", "75", "47", "17"])
