function solve(array, rotator) {
    let rotations = rotator % array.length;
    for (let i = 1; i <= rotations; i++){
        let lastEl = array.pop();
        array.unshift(lastEl);
    }
    return array.join(' ');
}

console.log(solve(['1', '2', '3', '4'], 2));
console.log(solve(['Banana', 'Orange', 'Coconut', 'Apple'], 15));