function sortArray(array) {
    const newArray = [];

    for (let el of array) {
        if (el < 0) {newArray.unshift(el);} 
        else {newArray.push(el);}
    }
    console.log(newArray.join('\n'))
}


sortArray([7, -2, 8, 9])