function even(data) {

    let newData = [];

    for (let i = 0; i < data.length; i++) {
        if (i % 2 == 0) {
            newData.push(data[i]);
        }
    }
    console.log(newData.join(' '))
}

even(['20', '30', '40', '50', '60'])