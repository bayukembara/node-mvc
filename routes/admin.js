const express = require("express");

const router = express.Router();

const productController = require("../controllers/products");

const products = [];

// /admin/add-product => GET
router.get("/add-product", productController.getProduct);

// /admin/add-product => POST
router.post("/add-product", productController.addProduct);

exports.routes = router;
exports.products = products;
