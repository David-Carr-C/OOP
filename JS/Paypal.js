var {Payment} = require("./Payment");

function Paypal(id) {
    Payment.call(id);
}

Paypal.prototype = new Payment();

module.exports = {
    Paypal: Paypal
}

// SOLID