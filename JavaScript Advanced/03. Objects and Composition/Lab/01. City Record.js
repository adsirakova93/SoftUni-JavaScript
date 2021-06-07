function solve(name, population, treasury) {
    let city = {};

    city.name = name;
    city.population = Number(population);
    city.treasury = Number(treasury);

    return city;
}

console.log(solve('Tortuga', 7000, 15000))