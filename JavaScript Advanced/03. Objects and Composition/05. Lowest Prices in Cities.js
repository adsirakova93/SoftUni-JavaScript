function solve(input) {
    let products = {};
    for (const each of input) {
        let [town, productName, price] = each.split(' | ');
        price = Number(price);
        if (!products[productName])z {
            products[productName] = {};
        }
        products[productName][town] = price;
    }

    let result = [];
    for (const key in products) {
        let townsSorted = Object.entries(products[key]).sort((a, b) => a[1] - b[1]);
        let chepestTown = townsSorted[0];
        result.push(`${key} -> ${chepestTown[1]} (${chepestTown[0]})`)
    }
    return result.join('\n')
}

console.log(solve([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]))