<?php

include "./Account.php";
include "./Car.php";
include "./Payment.php";
include "./Route.php";

require_once("./UberX.php");
require_once("./UberPool.php");

$car = new Car("AWS123", new Account("Daniela", "DA12NI12ELA"));

echo $car->getDataCar();
echo "||||||||||||||||||||||||||";

#UberX Creation
$uberFirst = new UberX("AWS1010", new Account("Daniela", "DA12NI12ELA"), "Chevrolet", "Spark");
echo $uberFirst->getDataCar();
echo "||||||||||||||||||||||||||";

#UberPool Creation
$uberSecond = new UberPool("DFGHJ11", new Account("David", "DA12VID"), "Dodge", "Attitude");
echo $uberSecond->getDataCar();
?>