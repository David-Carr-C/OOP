<?php

include "./Account.php";
include "./Car.php";
include "./Payment.php";
include "./Route.php";

require_once("./UberX.php");
require_once("./UberPool.php");
require_once("./UberVan.php");

# Test
$car = new Car("AWS123", new Account("Daniela", "DA12NI12ELA"));
$car->setPassenger(2);
echo $car->getDataCar();
echo "<br>";

#UberX Creation
$firstUber = new UberX("AWS1010", new Account("Daniela", "DA12NI12ELA"), "Chevrolet", "Spark");
$firstUber->setPassenger(4);
echo $firstUber->getDataCar();
echo "<br>";

#UberPool Creation
$uberSecond = new UberPool("DFGHJ11", new Account("David", "DA12VID"), "Dodge", "Attitude");
$uberSecond->setPassenger(4);
echo $uberSecond->getDataCar();
echo "<br>";

#UberVan Creation
$uberThird = new UberVan("AW12345", new Account("David", "DADA1010"), ["Chevrolet",["Spark",2020]], ["Vinil"]);
$uberThird->setPassenger(6);
echo $uberThird->getDataCar();
echo "<br>";
?>