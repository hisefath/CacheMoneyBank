const express = require("express");
const router = express.Router();
const {accounts, writeJSON} = require("../data.js");


//transfer view
router.get("/transfer", (req, res) => {
    res.render("transfer");
});

//POST Transfer
router.post("/transfer", (req, res) => {
    const from = req.body.from;
    const to = req.body.to;
    const amount = parseInt(req.body.amount);
    accounts[from].balance = parseInt(accounts[from].balance) - amount;
    accounts[to].balance = parseInt(accounts[to].balance) + amount;
    writeJSON();
    res.render('transfer', {message: 'Transfer Completed'});
});

//payment route
router.get("/payment", (req, res) => {
    res.render("payment", {account: accounts.credit});
});

//POST Payment
router.post("/payment", (req, res) => {
    accounts.credit.balance -= req.body.amount;
    accounts.credit.available = parseInt(accounts.credit.available) + parseInt(req.body.amount);
    writeJSON();
    res.render("payment", {message: "Payment Succesful", account: accounts.credit});
});

module.exports = router;