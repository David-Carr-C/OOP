function Car(license, driver) {
    this.id;
    this.license = license;
    this.driver = driver;
    this.passenger;

    /*this.getDataCar = () => {
        return "License: " + this.license + ", Driver: "+ this.driver.name + ", Document: " + this.driver.document;
    }*/
}

Car.prototype.getDataCar = function () {
    if (this.license!=undefined && this.driver.name!=undefined && this.driver.document!=undefined && this.passenger!=undefined)
        return "License: " + this.license + ", Driver: "+ this.driver.name + ", Document: " + this.driver.document + ", Passengers: "+ this.passenger;
    
    return "Error!";
}

Car.prototype.setPassenger = function (passenger) {
    if (passenger==4)
        this.passenger = passenger;
    else
        console.log("Invalid number!, Please set 4 passengers!");
}

module.exports = {
    Car: Car
}