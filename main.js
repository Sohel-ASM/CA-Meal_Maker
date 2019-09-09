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
}; // this is the closing bracket for the menu object
