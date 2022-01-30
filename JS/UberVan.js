var {Car} = require("./Car");

function UberVan(license, driver, typeCarAccepted, seatsMaterial) {
    this.typeCarAccepted = typeCarAccepted;
    this.seatsMaterial = seatsMaterial;
    Car.call(this,license,driver);
}

UberVan.prototype = new Car();

UberVan.prototype.setPassenger = function(passenger) {
    if (passenger==6)
        this.passenger = passenger;
    else
        console.log("Invalid number!, Please set 6 passengers!");
}

UberVan.prototype.getDataCar = function() {
    if (Car.prototype.getDataCar.call(this)!="Error!" && this.typeCarAccepted!=undefined && this.seatsMaterial!=undefined) {
        return Car.prototype.getDataCar.call(this) + ", Type-Car-Accepted: " + this.typeCarAccepted + ", Seat-Material: "+ this.seatsMaterial;
    }
    return "Error!";
}

module.exports = {
    UberVan: UberVan
}