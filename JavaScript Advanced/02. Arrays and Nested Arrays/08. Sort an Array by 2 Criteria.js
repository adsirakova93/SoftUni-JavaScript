function sort(array) {
    result = array.sort((a, b) => a.length - b.length || (a.localeCompare(b)));
    return result.join('\n');
}

// console.log(sort(['alpha', 'beta', 'gamma']));
// console.log(sort(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']));
console.log(sort(['test', 'Deny', 'omen', 'Default']));