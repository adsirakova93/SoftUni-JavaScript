function sortingNames(names) {
    let sortedNames = names.sort();

    for (let i = 0; i < names.length; i++) {
        console.log(`${i + 1}.${sortedNames[i]}`)
    }
}

sortingNames(["John", "Bob", "Christina", "Ema", "Bob"])