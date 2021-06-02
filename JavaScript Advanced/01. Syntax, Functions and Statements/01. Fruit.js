function calculateMoney(fruit, weight, price) {

    let kg = weight / 1000;
    let money = price * kg;

    console.log(`I need $${money.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`);
}

calculateMoney('orange', 2500, 1.80)