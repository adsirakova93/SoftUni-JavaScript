function addOrRemove(command) {
    num = 1;
    newArray = [];

    for (let i = 0; i < command.length; i++) {
        if (command == 'add') {
            newArray.push(num);
            num += 1;
        } else if (command == 'remove') {
            newArray.pop()
        }
    }
    return newArray
}

console.log(addOrRemove(['add', 'add', 'add', 'add']))