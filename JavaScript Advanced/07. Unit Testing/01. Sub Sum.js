function sumElements(array, startIndex, endIndex) {

    if (startIndex < 0) {
        startIndex = 0;
    };

    let newArray = array.slice(startIndex, endIndex);
    let result = (total, current) => total + current;

    return newArray.reduce(result);
}

// console.log(sumElements([10, 20, 30, 40, 50, 60], 3, 300));
console.log(sumElements([1.1, 2.2, 3.3, 4.4, 5.5], 0, 1));

// module.exports = sumElements;