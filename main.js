const menu = { // menu object with _courses property in it
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    // getter and setter methods for _courses's properties
    get appetizers() {
        return this._courses.appetizers;
    },
    get mains() {
        return this._courses.mains;
    },
    get desserts() {
        return this._courses.desserts;
    },
    set appetizers(appetizer) {
        this._courses.appetizers = appetizer;
    },
    set mains(main) {
        this._courses.mains = main;
    },
    set desserts(dessert) {
        this._courses.desserts = dessert;
    },
    get courses() { // getter method for to get items for appetizers, mains, and desserts as key value pairs

        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        };
    },
    // method for adding items with price, in a specified course on the menu
    addDishToCourse(courseName, dishName, dishPrice) {

        const dish = {
            name: dishName,
            price: dishPrice
        };
        // push the dish object into the relevant array of the _courses object of the menu
        this._courses[courseName].push(dish);
    },
    // method for randomly getting a dish from a course on the menu
    getRandomDishFromCourse(courseName) {
        // retrive the array of the given course's dishes
        const dishes = this._courses[courseName];
        // getting a random number as index
        const index = Math.floor(Math.random() * dishes.length);
        // getting a dish from a course using the random index number
        return dishes[index];

    },
    // method for generating a random meal with a item from each course, and the total price of the meal.
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;

        return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}. The price is $${totalPrice}.`;

    }
};

// adding menu/item to each courses
menu.addDishToCourse('appetizers', 'Banana mushroom', 5.00);
menu.addDishToCourse('appetizers', 'Spinach artichoke', 6.00);
menu.addDishToCourse('appetizers', 'City ceviche', 4.00);
menu.addDishToCourse('mains', 'Charred chicken', 7.00);
menu.addDishToCourse('mains', 'Roast chicken', 7.00);
menu.addDishToCourse('mains', 'Easy lamb', 10.00);
menu.addDishToCourse('desserts', 'Banana cake', 2.00);
menu.addDishToCourse('desserts', 'Zucchini cupcake', 2.00);
menu.addDishToCourse('desserts', 'Lemon bar', 1.00);
