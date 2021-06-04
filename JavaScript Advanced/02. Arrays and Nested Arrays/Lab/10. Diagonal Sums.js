function solve(matrix) {
    let sum1 = 0;
    let sum2 = 0;
    let matrixLength = Number(matrix[0].length)

    for (let i = 0; i < matrixLength; i++) {
        sum1 += matrix[i][i];
        sum2 += matrix[matrixLength - i][matrixLength - i];
    }

    console.log(sum1);
    console.log(sum2);
}

console.log(solve([[20, 40],
[10, 60]]
))