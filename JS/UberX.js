var {Car} = require("./Car");

function UberX(license, driver, brand, model) {
    this.brand = brand;
    this.model = model;
    Car.call(this, license, driver);
}


// Inherit Prototypes
UberX.prototype = new Car();

// New method
UberX.prototype.getDataCar = function () {
    if (Car.prototype.getDataCar.call(this)!="Error!" && this.brand!=undefined && this.model!=undefined)
        return Car.prototype.getDataCar.call(this) + ", Brand: "+ this.brand + ", Model: "+ this.model;
    return "Error!";
}

// Sobreescritura va debajo de la herencia de prototipos

module.exports = {
    UberX: UberX
}