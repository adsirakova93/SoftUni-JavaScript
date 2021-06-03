function sortArray(array) {
    const newArray = [];

    for (let el of array) {
        if (Number(el) < 0) {
            newArray.unshift(10);
        } else if (Number(el) >= 0) {
            newArray.shift();
        }
    }
    console.log(newArray)
}


sortArray([7, -2, 8, 9])