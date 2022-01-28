const {Account} = require("./Account");
const {Car} = require("./Car");
const {UberX} = require("./UberX");
const {UberPool} = require("./UberPool");

let car = new Car("AW456", new Account("Daniela","DA2355400"));
console.log(car.getDataCar());

let uber = new UberX("AWS1010", new Account("David", "DA10VID"), "Chevrolet", "Spark");
console.log(uber.getDataCar());
console.log(uber.getDataUber());

let uberSecond = new UberPool("AABBCC1", new Account("Daniela", "DA10NI10ELA"), "Dodge", "Attitude");
console.log(uberSecond.getDataCar());