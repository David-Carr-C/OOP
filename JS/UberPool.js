var {Car} = require("./Car");

function UberPool(license, driver, brand, model) {
    this.brand = brand;
    this.model = model;
    Car.call(this,license, driver);
}

UberPool.prototype = new Car();

module.exports = {
    UberPool: UberPool
}