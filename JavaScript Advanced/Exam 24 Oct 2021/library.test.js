const { expect, assert } = require('chai');


const library = {
    calcPriceOfBook(nameOfBook, year) {

        let price = 20;
        if (typeof nameOfBook != "string" || !Number.isInteger(year)) {
            throw new Error("Invalid input");
        } else if (year <= 1980) {
            let total = price - (price * 0.5);
            return `Price of ${nameOfBook} is ${total.toFixed(2)}`;
        }
        return `Price of ${nameOfBook} is ${price.toFixed(2)}`;
    },

    findBook: function(booksArr, desiredBook) {
        if (booksArr.length == 0) {
            throw new Error("No books currently available");
        } else if (booksArr.find(e => e == desiredBook)) {
            return "We found the book you want.";
        } else {
            return "The book you are looking for is not here!";
        }

    },
    arrangeTheBooks(countBooks) {
        const countShelves = 5;
        const availableSpace = countShelves * 8;

        if (!Number.isInteger(countBooks) || countBooks < 0) {
            throw new Error("Invalid input");
        } else if (availableSpace >= countBooks) {
            return "Great job, the books are arranged.";
        } else {
            return "Insufficient space, more shelves need to be purchased.";
        }
    }

};



describe("Tests", function () {
    describe("makeAnOrder", function () {

        it("test1", function () {
            expect(() => library.calcPriceOfBook(4, 2020)).to.throw(Error, "Invalid input");
        });


        it("test30", function () {
            expect(() => library.calcPriceOfBook('Sila', '2020')).to.throw(Error, "Invalid input");
        });


        it("test30", function () {
            expect(() => library.calcPriceOfBook('Sila', 1980)).to.throw(Error, "Invalid input");
        });



        
        it("test0", function () {
            expect(() => library.calcPriceOfBook(4, 1950)).to.throw();
        });

        it("test2", function () {
            expect(() => library.calcPriceOfBook(4, 2020.00)).to.throw(Error, "Invalid input");
        });

        
        it("test3", function () {
            expect(() => library.calcPriceOfBook(4.00, 2020.00)).to.throw(Error, "Invalid input");
        });

                
        it("test4", function () {
            expect(() => library.calcPriceOfBook(4.00, 2020)).to.throw(Error, "Invalid input");
        });


        
        it("test5", function () {
            expect(library.calcPriceOfBook('Strong', 1900)).to.equal("Price of Strong is 10.00");
        });


        it("test6", function () {
            expect(library.calcPriceOfBook('Strong', 2000)).to.equal("Price of Strong is 20.00");
        });



        it("test7", function () {
            expect(() => library.findBook([], 'Strong')).to.throw(Error, "No books currently available");
        });


        it("test8", function () {
            expect(library.findBook(['S'], 'Strong')).to.equal("The book you are looking for is not here!");
        });


        it("test9", function () {
            expect(library.findBook(['Strong'], 'Strong')).to.equal("We found the book you want.");
        });

        it("test10", function () {
            expect(library.findBook(['Strong', 'Music'], 'Music')).to.equal("We found the book you want.");
        });





        it("test11", function () {
            expect(() => library.arrangeTheBooks('ssss')).to.throw(Error, "Invalid input");
        });


        it("test12", function () {
            expect(() => library.arrangeTheBooks(-10)).to.throw(Error, "Invalid input");
        });

        
        it("test13", function () {
            expect(() => library.arrangeTheBooks(['2242a'])).to.throw(Error, "Invalid input");
        });


        it("test14", function () {
            expect(() => library.arrangeTheBooks(3.003)).to.throw(Error, "Invalid input");
        });


        
        it("test15", function () {
            expect(library.arrangeTheBooks(4)).to.equal("Great job, the books are arranged.");
        });


        it("test16", function () {
            expect(library.arrangeTheBooks(41)).to.equal("Insufficient space, more shelves need to be purchased.");
        });


                
        it("test17", function () {
            expect(library.arrangeTheBooks(40)).to.equal("Great job, the books are arranged.");
        });


        it("test18", function () {
            expect(library.arrangeTheBooks(39)).to.equal("Great job, the books are arranged.");
        });



        it("test19", function () {
            expect(library.calcPriceOfBook('Sila', 1980)).to.equal("Price of Sila is 10.00");
        });

        
    });
});