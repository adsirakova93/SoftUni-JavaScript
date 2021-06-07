function sortNums(array) {
    let newArray = [];
    array.sort((a, b) => a - b);
    
    while (array.length > 0) {
        let minNum = Math.min(...array);
        let maxNum = Math.max(...array);
        newArray.push(minNum);
        array.shift();
        newArray.push(maxNum);
        array.pop();
    } 

    newArray.concat(array)

    return newArray
}

console.log(sortNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))