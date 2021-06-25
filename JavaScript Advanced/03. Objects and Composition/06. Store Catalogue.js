function solve(array) {
    let dict = {};
    for (const pair of array) {
        let [product, price] = pair.split(' : ');
        price = Number(price);
        let letter = product[0].toUpperCase();

        if (!dict[letter]) {
            dict[letter] = {};
        }
        dict[letter][product] = price;
    }
    let result = [];

    let sortedDict = Object.keys(dict).sort((a,b) => a[0].localeCompare(b[0]))
    
    for (const key of sortedDict) {
        let alpha = Object.entries(dict[key])
            .sort((a,b) => (a[0].localeCompare(b[0])));
        result.push(key)
        let strings = alpha.map(x => `  ${x[0]}: ${x[1]}`).join('\n')
        result.push(strings)
        }
    return result.join('\n')
}

console.log(solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]))