<?php

class UberX extends Car {
    public $brand;
    public $model;

    public function __construct($license, $driver, $brand, $model) {
        parent::__construct($license,$driver);
        $this->brand = $brand;
        $this->model = $model;
    }

    public function getDataCar() {
        if (parent::getDataCar()!="Error!" && $this->brand!=null && $this->model!=null) {
            $parentData = parent::getDataCar();
            return "$parentData, Brand: $this->brand, Model: $this->model";
        } else {
            return "Error!";
        }
    }
}