const { expect, assert } = require('chai');

/// DO NOT DELETE ABOVE CODE


//////////////////////////////////////////////
let pizzUni = {
    makeAnOrder: function (obj) {

        if (!obj.orderedPizza) {
            throw new Error('You must order at least 1 Pizza to finish the order.');
        } else {
            let result = `You just ordered ${obj.orderedPizza}`
            if (obj.orderedDrink) {
                result += ` and ${obj.orderedDrink}.`
            }
            return result;
        }
    },

    getRemainingWork: function (statusArr) {

        const remainingArr = statusArr.filter(s => s.status != 'ready');

        if (remainingArr.length > 0) {

            let pizzaNames = remainingArr.map(p => p.pizzaName).join(', ')
            let pizzasLeft = `The following pizzas are still preparing: ${pizzaNames}.`

            return pizzasLeft;
        } else {
            return 'All orders are complete!'
        }

    },

    orderType: function (totalSum, typeOfOrder) {
        if (typeOfOrder === 'Carry Out') {
            totalSum -= totalSum * 0.1;

            return totalSum;
        } else if (typeOfOrder === 'Delivery') {

            return totalSum;
        }
    }
}


describe("Tests", function () {
    describe("makeAnOrder", function () {

        it("test1", function () {
            let order = {
                orderedPizza: 'Margaritta',
            }
            expect(pizzUni.makeAnOrder(order)).to.equal(`You just ordered Margaritta`);
        });

        it("test2", function () {
            let order = {
                orderedPizza: 'Margaritta',
                orderedDrink: 'Cola',
            }
            expect(pizzUni.makeAnOrder(order)).to.equal(`You just ordered Margaritta and Cola.`);
        });

        it("test3", function () {
            let order = {
            }
            expect(() => pizzUni.makeAnOrder(order)).to.throw();
        });

        it("test4", function () {
            let status = [
                {
                    pizzaName: 'Margarita',
                    status: 'ready',
                }
            ]
            expect(pizzUni.getRemainingWork(status)).to.equal('All orders are complete!')
        });

        it("test5", function () {
            let status = [
                {
                    pizzaName: 'Margarita',
                    status: 'preparing',
                }
            ]
            expect(pizzUni.getRemainingWork(status)).to.equal('The following pizzas are still preparing: Margarita.')
        });

        it("test6", function () {
            let status = [
                {
                    pizzaName: 'Margarita',
                    status: 'preparing',
                },
                {
                    pizzaName: 'Second',
                    status: 'preparing',
                }
            ]
            expect(pizzUni.getRemainingWork(status)).to.equal('The following pizzas are still preparing: Margarita, Second.')
        });


        it("test7", function () {
            expect(pizzUni.orderType(100, 'Carry Out')).to.equal(90);
        });

        it("test8", function () {
            expect(pizzUni.orderType(100, 'Delivery')).to.equal(100);
        });


    });
});
