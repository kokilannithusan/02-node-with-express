const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "All Products",
      path: "/products",
    });
  });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  console.log(prodId);
  res.redirect("/");
};

exports.getIndex = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    res.render("shop/index", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
    });
  });
};

exports.getCart = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    res.render("shop/cart", {
      prods: products,
      pageTitle: "Your Cart",
      path: "/cart",
    });
  });
};

exports.getCheckout = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    res.render("shop/checkout", {
      prods: products,
      pageTitle: "checkout",
      path: "/checkout",
    });
  });
};
