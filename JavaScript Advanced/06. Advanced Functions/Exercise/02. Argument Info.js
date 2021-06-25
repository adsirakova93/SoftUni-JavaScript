function solve(...arguments) {
    let summary = {}
    for (const argument of arguments) {
        let types = typeof argument;
        console.log(`${types}: ${argument}`)

        if (!summary[types]) {
            summary[types] = 0;
        }
        summary[types] += 1;
    }

    for (const summaryElement of Object.entries(summary)) {
        console.log(summaryElement.join(' = '))
    }
}

// solve('cat', 42, 54, function () { console.log('Hello world!'); })