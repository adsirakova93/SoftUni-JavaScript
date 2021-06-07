function solve(data) {
    data.sort((a, b) => a - b);
    const middle = Math.floor(data.length / 2);
    const result = data.slice(middle);

    return result;
}

console.log(solve([4, 7, 2, 5]))
console.log(solve([3, 19, 14, 7, 2, 19, 6]))