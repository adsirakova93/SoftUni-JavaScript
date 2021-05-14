function budget(data) {

    let rent = Number(data);
    let cake = rent * 0.2;
    let drinks = cake - (0.45 * cake);
    let animator = rent / 3;
    console.log(rent + cake + drinks + animator);

}

budget(["2250"])