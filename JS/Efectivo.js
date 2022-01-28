var {Payment} = require("./Payment");

function Efectivo(id) {
    Payment.call(this,id);
}

Efectivo.prototype = new Payment();

module.exports = {
    Efectivo: Efectivo
}

// SOLID