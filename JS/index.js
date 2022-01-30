var {Account} = require("./Account");
var {Car} = require("./Car");
var {UberX} = require("./UberX");
var {UberPool} = require("./UberPool");
var {Driver} = require("./Driver");
var {UberVan} = require("./UberVan");

// Prueba
var car = new Car("AW456", new Account("Daniela","DA2355400"));
car.setPassenger(2);
console.log(car.getDataCar());

// Creacion de objetos
var uber = new UberX("AWS1010", new Driver("David", "DA10VID"), "Chevrolet", "Spark");
uber.setPassenger(4);
console.log(uber.getDataCar());

var secondUber = new UberPool("AABBCC1", new Driver("Daniela", "DA10NI10ELA"), "Dodge", "Attitude");
secondUber.setPassenger(4);
console.log(secondUber.getDataCar());

var thirdUber = new UberVan("AWS1010", new Driver("David", "DA10VID"), ["Chevrolet", ["Spark", 2020]], ["Vinil"]);
thirdUber.setPassenger(6);
console.log(thirdUber.getDataCar());