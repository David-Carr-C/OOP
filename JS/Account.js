function Account (name, document) { /* Esta es la forma base de JS*/
    this.id;
    this.name = name;
    this.document = document;
    this.email;
    this.password;
}

/*
var myAcc = {   <- Este es un objeto ya hecho
    id: -1,
    nam3: "",
    document: "",
    email: "",
    password: ""
}

let Account =  class{ <- Esto es una clase
    id;
    name;
}

class Rectangulo {
  constructor(alto, ancho) { //<- Esto es otra forma de hacer una clase
    this.alto = alto;
    this.ancho = ancho;
  }
  getData() {
    return "Altura: "+ this.alto + ", Ancho: "+ this.ancho;
  }
}*/

module.exports = {
  Account: Account
}