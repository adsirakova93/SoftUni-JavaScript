function worker(obj) {
    if (obj.dizziness == false) {
        return obj
    }

    let needWater = obj.weight * obj.experience * 0.1;
    obj.levelOfHydrated += needWater;
    return obj
}

console.log(worker({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}
));

console.log(worker({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
}
));