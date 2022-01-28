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
    return "License: " + this.license + ", Driver: "+ this.driver.name + ", Document: " + this.driver.document;
}

module.exports = {
    Car: Car
}