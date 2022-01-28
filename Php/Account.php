<?php

class Account {
    private $id;
    public $name;
    public $document; //Estamos realizando todo en public por ahora, despues habra funciones especializadas en regresar estos datos
    private $email;
    private $password;

    public function __construct($name,$document) {
        $this->name = $name;
        $this->document = $document;
    }
}