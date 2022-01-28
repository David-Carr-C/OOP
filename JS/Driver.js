var {Account} = require("./Account");

function Driver(name,document) {
    Account.call(this,name,document);
}

Driver.prototype = new Account();

module.exports = {
    Driver: Driver
}

// SOLID