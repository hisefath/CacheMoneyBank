const fs = require("fs");
const path = require("path");

//read file and parse json to store accounts and users in variables
const accountData = fs.readFileSync(path.join(__dirname, "json/accounts.json"), "utf8");
const accounts = JSON.parse(accountData);
const userData = fs.readFileSync("src/json/users.json", "utf8");
const users = JSON.parse(userData);

const writeJSON = () => {
    var accountsJSON = JSON.stringify(accounts);
    fs.writeFileSync(path.join(__dirname, "/json/accounts.json"),  accountsJSON, "utf8");
};


module.exports = {accounts, users, writeJSON};