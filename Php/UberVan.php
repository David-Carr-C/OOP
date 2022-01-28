<?php

class UberVan extends Car {
    public $typeCarAccepted = array(array());
    public $seatsMaterial = array();

    public function __construct($license, $driver,$typeCarAccepted,$seatsMaterial) {
        parent::__construct($license,$driver);
        $this->typeCarAccepted = $typeCarAccepted;
        $this->seatsMaterial = $seatsMaterial;
    }
}