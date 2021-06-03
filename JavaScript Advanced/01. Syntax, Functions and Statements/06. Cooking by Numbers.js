function solve(array) {
    let num = Number(array[0]);
    let newArray = array.slice(1)
    newArray.forEach(element => {
        if (element == 'chop') {
            num /= 2;
        } else if (element == 'dice') {
            num = Math.sqrt(num);
        } else if (element == 'spice') {
            num += 1;
        } else if (element == 'bake') {
            num *= 3;
        } else {
            num *= 0.8;
        }
        console.log(num);
    });
}

solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
// solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);