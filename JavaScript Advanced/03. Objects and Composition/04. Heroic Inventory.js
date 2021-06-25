function heroes(array) {
    newArray = [];
    for (let index = 0; index < array.length; index++) {
        let [name, level, items] = array[index].split(' / ')
        level = Number(level);

        if (!items) {
            items = [];
        } else {
            items = items.split(', ');
        }
        
        obj = { 
            name: name, 
            level: level,
            items: items, 
        }
        newArray.push(obj);
    }
    return JSON.stringify(newArray)
}

console.log(heroes([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / '
]
))

console.log(heroes([
    'Jake / 1000 / '
]
))