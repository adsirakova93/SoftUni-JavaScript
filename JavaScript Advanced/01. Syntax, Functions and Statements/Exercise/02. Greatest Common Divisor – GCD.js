function solve(a, b) {
    result = 0;

    if (b) {
        result = solve(b, a % b);
    } else {
        result = Math.abs(a);
    }
    return result
}

console.log(solve(15, 5));
console.log(solve(2154, 458));