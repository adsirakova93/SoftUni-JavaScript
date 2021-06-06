function addOrRemove(command) {
    let newArray = [];
    let num = 1;

    for (let i = 0; i < command.length; i++) {

        if (command[i] === 'add') {
            newArray.push(num);
        } else if (command[i] === 'remove') {
            newArray.pop();
        }
        num += 1;
    }
    if (newArray.length === 0){
        return 'Empty'
    }
    return newArray.join('\n');
}

console.log(addOrRemove(['add', 'add', 'add', 'add']));
console.log(addOrRemove(['add', 'add', 'remove', 'add', 'add']));
console.log(addOrRemove(['remove', 'remove', 'remove']))



