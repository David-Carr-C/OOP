var {Car} = require("./Car");

function UberBlack(license, driver , typeCarAccepted, seatsMaterial) {
    this.typeCarAccepted = typeCarAccepted;
    this.seatsMaterial = seatsMaterial;
    Car.call(this,license,driver);
}

UberBlack.prototype = new Car();

module.exports = {
    UberBlack: UberBlack
}