function solve(str) {
    let upperCase = str.toUpperCase();
    let regex = /[^\W]+/g;
    let words = upperCase.match(regex);
    return words.join(', ')
}

console.log(solve('Hi, how are you?'));