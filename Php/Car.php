<?php

class Car{
    private $id;
    private $license;
    private $driver;
    protected $passenger;

    public function __construct($license, $driver) {
        $this->license = $license;
        $this->driver = $driver;
    }

    public function getDataCar() {
        if ($this->passenger!=null && $this->license!=null && $this->driver->name && $this->driver->document!=null)
            return "License: $this->license, Driver: {$this->driver->name}, Document: {$this->driver->document}, Passenger: $this->passenger";
        else
            return "Error!";
    }

    public function getPassenger() {
        return $this->passenger;
    }

    public function setPassenger($passenger) {
        if ($passenger==4) {
            $this->passenger = $passenger;
        } else {
            echo "Necesitas asignar 4 pasajeros";
        }
    }

    public function getLicense() {
        return $this->license;
    }

    public function setLicense($license) {
        $this->license = $license;
    }

    public function getDriver() {
        return $driver;
    }

    public function setDriver($driver) {
        $this->driver = $driver;
    }
}