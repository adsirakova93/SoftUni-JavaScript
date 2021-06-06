function solve(array, rotator) {
    let rotations = rotator % array.length;
    for (let i = 1; i <= rotations; i++){
        let firstEl = array.pop();
        array.unshift(firstEl);
    }
    return array.join(' ');
}
console.log(solve(['1', '2', '3', '4'], 2));
console.log(solve(['Banana', 'Orange', 'Coconut', 'Apple'], 15));