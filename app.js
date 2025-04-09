const express = require("express");

const path = require("path");

const app = express();

const errorPage= require("./controllers/error");

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./router/admin");
const shopRoutes = require("./router/shop");

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorPage.get404Page);

app.listen(3000);
