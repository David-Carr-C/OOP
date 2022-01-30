<?php

class UberBlack extends Car {
    public $typeCarAccepted;
    public $seatsMaterial;

    public function __construct($license, $driver,$typeCarAccepted,$seatsMaterial) {
        parent::__construct($license,$driver);
        $this->typeCarAccepted = $typeCarAccepted;
        $this->seatsMaterial = $seatsMaterial;
    }

    public function getDataCar() {
        if (parent::getDataCar()!="Error!" && $this->typeCarAccepted!=null && $this->seatsMaterial!=null) {
            $parentData = parent::getDataCar();
            $typeCar = print_r($this->typeCarAccepted,true);
            $seatsMat = implode(",",$this->seatsMaterial);
            return "$parentData, Type-Car-Accepted: $typeCar, Seat-Material: $seatsMat";
        } else {
            return "Error!";
        }
    }
}