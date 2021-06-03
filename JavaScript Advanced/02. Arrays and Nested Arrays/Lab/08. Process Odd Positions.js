function solve(numbers){
    let newNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        if (i % 2 != 0) {
            newNumbers.push(numbers[i] * 2)
        }
    }
    return newNumbers.reverse().join(' ')
}

console.log(solve([10, 15, 20, 25]))
console.log(solve([3, 0, 10, 4, 7, 3]))