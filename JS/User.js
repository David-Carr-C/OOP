var {Account} = require("./Account");

function User (name,document) {
    Account.call(this,name,document);
}

User.prototype = new Account();

module.exports = {
    User: User
}

// SOLID