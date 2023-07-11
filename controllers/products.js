const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
    res.render("add-product", {
        pageTitle: "Add Product",
        path: "/admin/add-product",
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true,
    });
};

exports.postAddProduct = (req, res, next) => {
    const products = new Product(req.body.title);
    products.save();
    res.redirect("/");
};

exports.getAllProduct = (req, res, next) => {
    const products = Product.fetchAll();
    res.render("shop", {
        prods: products,
        pageTitle: "Shop",
        path: "/",
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true,
    });
};
