function sortingNames(names) {
    let sortedNames = names.sort((a, b) => a.localeCompare(b, undefined, {sensitivity: 'base'}))

    for (let i = 0; i < names.length; i++) {
        console.log(`${i + 1}.${sortedNames[i]}`)
    }
}

sortingNames(["John", "christina", "Bob", "Ema"])