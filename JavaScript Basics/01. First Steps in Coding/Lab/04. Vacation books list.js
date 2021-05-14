function vacation(data) {

    let pages = Number(data[0]);
    let speed = Number(data[1]);
    let days = Number(data[2]);
    let totalTime = pages / speed;
    let result = totalTime / days;
    console.log(result);

}

vacation(["212","20","2"])
