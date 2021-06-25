function sortNums(array) {
    let newArray = [];
    array.sort((a, b) => a - b);

    while (array.length) {
        newArray.push(array.shift());
        if (array.length > 0) {
            newArray.push(array.pop())
        }
    }
    return newArray
}

console.log(sortNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))