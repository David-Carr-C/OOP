const {Car} = require("./Car");

function UberVan(license, driver, typeCarAccepted, seatsMaterial) {
    this.typeCarAccepted = typeCarAccepted;
    this.seatsMaterial = seatsMaterial;
    Car.call(this,license,driver);
}

UberVan.prototype = new Car();

module.exports = {
    UberVan: UberVan
}