var {Car} = require("./Car");

function UberBlack(license, driver , typeCarAccepted, seatsMaterial) {
    this.typeCarAccepted = typeCarAccepted;
    this.seatsMaterial = seatsMaterial;
    Car.call(this,license,driver);
}

UberBlack.prototype = new Car();

UberBlack.prototype.getDataCar = function() {
    if (Car.prototype.getDataCar.call(this)!="Error!" && this.typeCarAccepted!=undefined && this.seatsMaterial!=undefined){
        return Car.prototype.getDataCar.call(this) + ", Type-Car-Accepted: " + this.typeCarAccepted + ", Seat-Material: " + this.seatsMaterial;
    }
    return "Error!";
}

module.exports = {
    UberBlack: UberBlack
}