class ChristmasDinner {
    constructor(budget) {
        this.budget = Number(budget);
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

        set budget(value) {
            if (value < 0) {
                throw new Error(`The budget cannot be a negative number`);
            }
            this._budget = value;
        }
        get budget() {
            return this._budget;
        }

    shopping([type, price]) {
        if (price > this.budget) {
            throw new Error(`Not enough money to buy this product`);
        }
        this.budget = this.budget - price;
        this.products.push(type);
        return `You have successfully bought ${type}!`
 
    }

    recipes({recipe}) {}

    inviteGuests(name, dish) {}

    showAttendance() {}

}


let dinner = new ChristmasDinner(-300);

// dinner.shopping(['Salt', 1]);
// dinner.shopping(['Beans', 3]);
// dinner.shopping(['Cabbage', 4]);
// dinner.shopping(['Rice', 2]);
// dinner.shopping(['Savory', 1]);
// dinner.shopping(['Peppers', 1]);
// dinner.shopping(['Fruits', 40]);
// dinner.shopping(['Honey', 10]);

// dinner.recipes({
//     recipeName: 'Oshav',
//     productsList: ['Fruits', 'Honey']
// });
// dinner.recipes({
//     recipeName: 'Folded cabbage leaves filled with rice',
//     productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
// });
// dinner.recipes({
//     recipeName: 'Peppers filled with beans',
//     productsList: ['Beans', 'Peppers', 'Salt']
// });
//
// dinner.inviteGuests('Ivan', 'Oshav');
// dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
// dinner.inviteGuests('Georgi', 'Peppers filled with beans');
//
// console.log(dinner.showAttendance());
