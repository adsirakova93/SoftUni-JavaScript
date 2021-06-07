function calcMaxNumber(one, two, three){
    let result = "";
    if (one > two && one > three){
        result = one;
    } else if (two > one && two > three) {
        result = two;
    } else {
        result = three;
    }
    console.log(`The largest number is ${result}.`);
}

calcMaxNumber(5, -3, 16)