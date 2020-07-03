//require libraries and express framework
const path = require("path");
const express = require("express");
const {accounts, users, writeJSON} = require("./data.js");
const accountRoutes = require("./routes/accounts");
const servicesRoutes = require("./routes/services");
const { Router } = require("express");
const app = express();

//configure view directory and view engine
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs");

//configure static directory
app.use(express.static(path.join(__dirname, "public")));
//add express middleware to handle POST data
app.use(express.urlencoded({extended:true}));
app.use("/account", accountRoutes);
app.use("/services", servicesRoutes);

//created index view route, with passed in variable
app.get("/", (req, res) => {
    res.render("index", {title:"Account Summary", accounts});
});

//profile view
app.get("/profile", (req, res) => {
    res.render("profile", {user: users[0]});
});

//created server with app.listen -> fixed for heroku's dynamic assignment
app.listen(process.env.PORT || 3000);