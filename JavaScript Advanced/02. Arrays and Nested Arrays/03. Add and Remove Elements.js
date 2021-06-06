function addOrRemove(command) {
    newArray = [];

    for (let i = 0; i < command.length; i++) {
        num = 1;
        if (command[i] === 'add') {
            newArray.push(num);
            num += 1;
        } else if (command[i] === 'remove') {
            newArray.pop()
        }
    }
    return newArray
}

console.log(addOrRemove(['add', 'add', 'add', 'add']))