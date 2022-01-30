<?php

class UberVan extends Car {
    public $typeCarAccepted = array(array());
    public $seatsMaterial = array();

    public function __construct($license, $driver,$typeCarAccepted,$seatsMaterial) {
        parent::__construct($license,$driver);
        $this->typeCarAccepted = $typeCarAccepted;
        $this->seatsMaterial = $seatsMaterial;
    }

    public function setPassenger($passenger) {
        if ($passenger == 6) {
            $this->passenger = $passenger;
        } else {
            echo "Error!, por favor inserte 6 pasajeros!";
        }

    }

    public function getDataCar() {
        if (parent::getDataCar()!="Error!" && $this->typeCarAccepted!=null && $this->seatsMaterial!=null){
            $parentData = parent::getDataCar();
            $typeCar = print_r($this->typeCarAccepted,true);
            $seatsMat = implode(",",$this->seatsMaterial);
            return "$parentData, Type-Car-Accepted: $typeCar, Seat-Material: $seatsMat";
        }
        return "Error!";
    }
}