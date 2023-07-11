//* this is model for ES5

// module.exports = function Product() {

// }

// * this is model for ES6
const products = [];

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }
    // * this is function save without write function in front of the function name
    save() {
        products.push(this);
    }
    static fetchAll() {
        return products;
    }
};
