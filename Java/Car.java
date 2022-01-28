public class Car {
    int id;
    String license;
    Account driver; /*<- se cambia el tipo String driver;*/
    int passenger;

    public Car(String license, Account driver) { /*Hay 3 metodos constructores: Default, Constructor y Copia */
        this.license = license;
        this.driver = driver;
    }

    String getLicense() {
        return license;
    }

    String getDataCar() {
        return "License: " + license + ", Driver: "+ driver.name + ", Passenger: " + passenger;
    }
}
