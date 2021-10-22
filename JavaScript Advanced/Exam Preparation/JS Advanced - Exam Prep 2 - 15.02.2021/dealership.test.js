const { expect, assert } = require('chai');


let dealership = {
    newCarCost: function (oldCarModel, newCarPrice) {

        let discountForOldCar = {
            'Audi A4 B8': 15000,
            'Audi A6 4K': 20000,
            'Audi A8 D5': 25000,
            'Audi TT 8J': 14000,
        }

        if (discountForOldCar.hasOwnProperty(oldCarModel)) {
            let discount = discountForOldCar[oldCarModel];
            let finalPrice = newCarPrice - discount;
            return finalPrice;
        } else {
            return newCarPrice;
        }
    },

    carEquipment: function (extrasArr, indexArr) {
        let selectedExtras = [];
        indexArr.forEach(i => {
            selectedExtras.push(extrasArr[i])
        });

        return selectedExtras;
    },

    euroCategory: function (category) {
        if (category >= 4) {
            let price = this.newCarCost('Audi A4 B8', 30000);
            let total = price - (price * 0.05)
            return `We have added 5% discount to the final price: ${total}.`;
        } else {
            return 'Your euro category is low, so there is no discount from the final price!';
        }
    }
}


describe("Tests", function () {
    describe("TODO", function () {

        it("test1", function () {
            expect(dealership.newCarCost('Audi', 200)).to.equal(200);
        });

        
        it("test2", function () {
            expect(dealership.newCarCost('Audi A4 B8', 30000)).to.equal(15000);
        });


        it("test3", function () {                                   // For arrays use deep.equal
            expect(dealership.carEquipment(['nav'],[0])).to.deep.equal(['nav']);   
        });


        it("test4", function () {
            expect(dealership.carEquipment(['nav', 'tv'],[0])).to.deep.equal(['nav']);
        });


        it("test5", function () {
            expect(dealership.carEquipment(['nav', 'tv'],[0, 1])).to.deep.equal(['nav', 'tv']);
        });


        it("test6", function () {
            expect(dealership.carEquipment(['nav', 'tv'],[1])).to.deep.equal(['tv']);
        });


        it("test7", function () {
            expect(dealership.euroCategory(6)).to.equal('We have added 5% discount to the final price: 14250.')
        });

        it("test8", function () {
            expect(dealership.euroCategory(4)).to.equal('We have added 5% discount to the final price: 14250.')
        });

        
        it("test9", function () {
            expect(dealership.euroCategory(2)).to.equal('Your euro category is low, so there is no discount from the final price!')
        });

    });
});
