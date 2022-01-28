const {Car} = require("./Car");

function UberX(license, driver, brand, model) {
    this.brand = brand;
    this.model = model;
    Car.call(this, license, driver);
}

// Inherit Prototypes
UberX.prototype = new Car();

// New method
UberX.prototype.getDataUber = function () {
    return "License: " + this.license + ", Driver: "+ this.driver.name + ", Document: " + this.driver.document+ ", Brand: " + this.brand + ", Model: " + this.model;
}

module.exports = {
    UberX: UberX
}