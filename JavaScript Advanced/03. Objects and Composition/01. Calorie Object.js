function solve(array) {
    output = {};
    for (let i = 0; i < array.length - 1; i += 2) {
        let product = array[i];
        let calories = array[i + 1];
        output[product] = calories;
    }
    return output;
}

console.log(solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']))