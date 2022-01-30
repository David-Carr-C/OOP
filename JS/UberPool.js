var {Car} = require("./Car");

function UberPool(license, driver, brand, model) {
    this.brand = brand;
    this.model = model;
    Car.call(this,license, driver);
}

UberPool.prototype = new Car();

UberPool.prototype.getDataCar = function () {
    if (this.brand!=undefined && this.model!= undefined && Car.prototype.getDataCar.call(this)!="Error!")
        return Car.prototype.getDataCar.call(this) + ", Brand: " + this.brand + ", Model: " + this.model;
    else
        return "Error!";
}

module.exports = {
    UberPool: UberPool
}