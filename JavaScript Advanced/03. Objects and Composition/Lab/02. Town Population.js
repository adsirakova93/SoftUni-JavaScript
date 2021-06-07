function townPopulation(data) {
    let newObject = {};

    data.forEach(element => {
        let [name, population] = element.split(' <-> ')
        population = Number(population);

        if (newObject[name] == undefined) {
            newObject[name] = population;
        } else {
            newObject[name] += population;
        }
    });

    for (let town in newObject) {
        console.log(`${town} : ${newObject[town]}`)
    }
}

townPopulation([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
);

townPopulation([
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
)