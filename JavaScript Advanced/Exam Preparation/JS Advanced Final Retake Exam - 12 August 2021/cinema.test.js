const { expect, assert } = require('chai');



const cinema = {
    showMovies: function(movieArr) {

        if (movieArr.length == 0) {
            return 'There are currently no movies to show.';
        } else {
            let result = movieArr.join(', ');
            return result;
        }

    },
    ticketPrice: function(projectionType) {

        const schedule = {
            "Premiere": 12.00,
            "Normal": 7.50,
            "Discount": 5.50
        }
        if (schedule.hasOwnProperty(projectionType)) {
            let price = schedule[projectionType];
            return price;
        } else {
            throw new Error('Invalid projection type.')
        }

    },
    swapSeatsInHall: function(firstPlace, secondPlace) {

        if (!Number.isInteger(firstPlace) || firstPlace <= 0 || firstPlace > 20 ||
            !Number.isInteger(secondPlace) || secondPlace <= 0 || secondPlace > 20 || firstPlace === secondPlace) {
            return "Unsuccessful change of seats in the hall.";
        } else {
            return "Successful change of seats in the hall.";
        }

    }
};






describe("Tests", function () {
    describe("Todo", function () {

        it("test1", function () {
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show.');
        });


        it("test2", function () {
            expect(cinema.showMovies(['King'])).to.equal('King');
        });


        it("test3", function () {
            expect(cinema.showMovies(['Scream', 'Take'])).to.equal('Scream, Take');
        });


        it("test4", function () {
            expect(cinema.ticketPrice('Premiere')).to.equal(12);
        });


        it("test5", function () {
            expect(cinema.ticketPrice('Normal')).to.equal(7.5);
        });


        it("test6", function () {
            expect(cinema.ticketPrice('Discount')).to.equal(5.5);
        });



        it("test7", function () {
            expect(() => cinema.ticketPrice('XXL')).to.throw(Error, 'Invalid projection type.');
        });


        it("test8", function () {
            expect(cinema.swapSeatsInHall(2, 3)).to.equal("Successful change of seats in the hall.");
        });

        it("test8", function () {
            expect(cinema.swapSeatsInHall(1, 20)).to.equal("Successful change of seats in the hall.");
        });

        it("test8", function () {
            expect(cinema.swapSeatsInHall(5, 19)).to.equal("Successful change of seats in the hall.");
        });


        it("test9", function () {
            expect(cinema.swapSeatsInHall(2, 2)).to.equal("Unsuccessful change of seats in the hall.");
        });


        it("test10", function () {
            expect(cinema.swapSeatsInHall(2.4, 2)).to.equal("Unsuccessful change of seats in the hall.");
        });

        
        it("test11", function () {
            expect(cinema.swapSeatsInHall(2, 2.5)).to.equal("Unsuccessful change of seats in the hall.");
        });


        it("test12", function () {
            expect(cinema.swapSeatsInHall(-2, 5)).to.equal("Unsuccessful change of seats in the hall.");
        });


        it("test13", function () {
            expect(cinema.swapSeatsInHall(-2, -3)).to.equal("Unsuccessful change of seats in the hall.");
        });


        it("test14", function () {
            expect(cinema.swapSeatsInHall(2, -2)).to.equal("Unsuccessful change of seats in the hall.");
        });


        it("test15", function () {
            expect(cinema.swapSeatsInHall(21, 5)).to.equal("Unsuccessful change of seats in the hall.");
        });


        it("test16", function () {
            expect(cinema.swapSeatsInHall(3, 35)).to.equal("Unsuccessful change of seats in the hall.");
        });


        it("test17", function () {
            expect(cinema.swapSeatsInHall(0, 3)).to.equal("Unsuccessful change of seats in the hall.");
        });

        
        it("test18", function () {
            expect(cinema.swapSeatsInHall(0, 0)).to.equal("Unsuccessful change of seats in the hall.");
        });


        it("test19", function () {
            expect(cinema.swapSeatsInHall(4, 0)).to.equal("Unsuccessful change of seats in the hall.");
        });


        it("test19", function () {
            expect(cinema.swapSeatsInHall(-4, 40)).to.equal("Unsuccessful change of seats in the hall.");
        });

        
        it("test20", function () {
            expect(cinema.swapSeatsInHall(40, -40)).to.equal("Unsuccessful change of seats in the hall.");
        });
        
        
        it("test21", function () {
            expect(cinema.swapSeatsInHall(['text'], 4)).to.equal("Unsuccessful change of seats in the hall.");
        });

                
        it("test22", function () {
            expect(cinema.swapSeatsInHall(4, ['text'])).to.equal("Unsuccessful change of seats in the hall.");
        });
        

    });
});