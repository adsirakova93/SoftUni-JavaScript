function countNumbers(one, two, three){
    let totalSymbols = one.length + two.length + three.length;
    let averageSymbols = Math.trunc(totalSymbols / 3);
    console.log(totalSymbols);
    console.log(averageSymbols);
}

countNumbers('chocolate', 'ice cream', 'cake')