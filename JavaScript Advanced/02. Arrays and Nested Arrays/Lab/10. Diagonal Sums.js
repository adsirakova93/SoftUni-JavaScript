function solve(matrix) {
    let sum1 = 0;
    let sum2 = 0;
    let result = [];

    for (let index = 0; index < matrix.length; index++) {
        sum1 += matrix[index][index];
        sum2 += matrix[index][(matrix.length - 1) - index];
    }
    
    result.push(sum1);
    result.push(sum2);
    return result.join(' ')
}

console.log(solve([[20, 40], 
    [10, 60]]));

console.log(solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   ));