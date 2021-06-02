function squareOfStars(input) {
    let stars = "* ";
    let num = Number(input);

    if (input === undefined) {
        num = 5
    }

    for (i = 1; i <= num; i++) {
        console.log(stars.repeat(num));
    }
}

squareOfStars(1)
squareOfStars(2)
squareOfStars(3)
squareOfStars()