var {Account} = require("./Account");
var {Car} = require("./Car");
var {UberX} = require("./UberX");
var {UberPool} = require("./UberPool");

// Prueba
var car = new Car("AW456", new Account("Daniela","DA2355400"));
console.log(car.getDataCar());

// Creacion de objetos
var uber = new UberX("AWS1010", new Account("David", "DA10VID"), "Chevrolet", "Spark");
console.log(uber.getDataCar());
console.log(uber.getDataUber());

var uberSecond = new UberPool("AABBCC1", new Account("Daniela", "DA10NI10ELA"), "Dodge", "Attitude");
console.log(uberSecond.getDataCar());