function calculate_expenses(data) {
    let numberDogs = Number(data[0]);
    let numberOthers = Number(data[1]);
    let expenses = (numberDogs * 2.5) + (numberOthers * 4);
    console.log(expenses + " lv.")
}

calculate_expenses(["13", "9"])