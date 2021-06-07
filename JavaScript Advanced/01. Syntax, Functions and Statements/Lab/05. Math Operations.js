function calculator(num1, num2, operator) {
    let result = "";

    if (operator == "+") {
        result = num1 + num2;
    } else if (operator == "-") {
        result = num1 - num2;
    } else if (operator == "*") {
        result = num1 * num2;
    } else if (operator == "/") {
        result = num1 / num2;
    } else if (operator == "%") {
        result = num1 % num2;
    } else if (operator == "**") {
        result = num1 ** num2;
    }
    console.log(result);
}

calculator(5, 6, '+')
calculator(3, 5.5, '*')