class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(array) {
        let result = [];
        for (let index = 0; index < array.length; index++) {
            let [productName, productQuantity, productTotalPrice] = array[index].split(' ');
            productQuantity = Number(productQuantity);
            productTotalPrice = Number(productTotalPrice);
            
            if (productTotalPrice <= this.budgetMoney) {
                if (!this.stockProducts[productName]) {
                    this.stockProducts[productName] = productQuantity;
                } else {
                    this.stockProducts[productName] += productQuantity;
                }
                this.budgetMoney -= productTotalPrice
                
                result.push(`Successfully loaded ${productQuantity} ${productName}`)
            } else {
                result.push(`There was not enough money to load ${productQuantity} ${productName}`)
            }
            
        }
        // console.log(this.stockProducts);
        // return result.join('\n')
        
    }

    addToMenu(meal, array, price) {
        price = Number(price);

        for (let index = 0; index < array.length; index++) {
            let [productName, productQuantity] = array[index].split(' ')
            productQuantity = Number(productQuantity);

        }

        if (!this.menu[meal]) {
            this.menu[meal] = { 'products': array, 'price': price }
        } else {
            return `The ${meal} is already in the our menu, try something different.`
        }

        if (Object.keys(this.menu).length === 1) {
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
        }
        return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`

    }

    showTheMenu() {
        if (Object.keys(this.menu).length === 0) {
            return "Our menu is not ready yet, please come later..."
        }
    }

    makeTheOrder(meal) {
        if (!this.meal[meal]) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        } else {
            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${meal.price}.`
        }
    }

}

