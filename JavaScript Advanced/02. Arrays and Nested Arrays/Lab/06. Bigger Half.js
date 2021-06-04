function solve(data) {
    let result;
    data.sort((a, b) => a - b);
    let middle = Math.floor(data.length / 2);
    result = data.slice(middle);
    return result;
}

console.log(solve([4, 7, 2, 5]))
console.log(solve([3, 19, 14, 7, 2, 19, 6]))