function solve(array) {
    let [num, ...commands] = array
    let nums = Number(num);
    let result = [];

    for (let element of commands) {
        if (element === 'chop') {
            nums /= 2;
        } else if (element === 'dice') {
            nums = Math.sqrt(nums);
        } else if (element === 'spice') {
            nums += 1;
        } else if (element === 'bake') {
            nums *= 3;
        } else if (element === 'fillet') {
            nums *= 0.8;
        }
        result.push(nums);
    }
    return result.join('\n')
}

// console.log(solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop']));
console.log(solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']))