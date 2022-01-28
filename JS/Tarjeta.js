var {Payment} = require("./Payment");

function Tarjeta (id) {
    Payment.call(id);
}

Tarjeta.prototype = new Payment();

module.exports = {
    Tarjeta: Tarjeta
}

// SOLID