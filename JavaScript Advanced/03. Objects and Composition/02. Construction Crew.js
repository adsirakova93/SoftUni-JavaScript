function crew(weight, experience, levelOfHydrated, dizziness) {
    return {
        weight,
        experience,
        levelOfHydrated,
        dizziness,
    }
}


console.log(crew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}))