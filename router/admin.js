const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const path = require("path");

const adminController = require("../controllers/admin");

// Middleware to parse URL-encoded data (e.g., form submissions)
router.use(bodyParser.urlencoded({ extended: false }));

// Route to display the form for adding a product

// adimin/add-product => GET
router.get("/add-product", adminController.getAddProduct);

router.get("/products", adminController.getProducts);

// adimin/add-product => POST
router.post("/add-product", adminController.postAddProduct);

module.exports = router;
