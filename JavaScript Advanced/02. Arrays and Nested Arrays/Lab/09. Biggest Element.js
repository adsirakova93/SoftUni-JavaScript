function biggest(matrix) {
    let biggestNum = 0;


    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col <= matrix.length; col++) {
            if (matrix[row][col] > biggestNum) {
                biggestNum = matrix[row][col]
            }
        }
    }
    return biggestNum

}

console.log(biggest([[20, 50, 10],
[8, 83, 145]]
));

console.log(biggest([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]));
