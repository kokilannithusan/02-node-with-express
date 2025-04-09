const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const path = require("path");

const productController = require("../controllers/products");

// Middleware to parse URL-encoded data (e.g., form submissions)
router.use(bodyParser.urlencoded({ extended: false }));

// Route to display the form for adding a product

// adimin/add-product => GET
router.get("/add-product", productController.getAddProduct);

// adimin/add-product => POST
router.post("/add-product", productController.postAddProduct);

module.exports = router;
