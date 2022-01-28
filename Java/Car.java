public class Car {
    int id;
    String license;
    Account driver; /*<- se cambia el tipo String driver;*/
    private int passenger;

    public Car(String license, Account driver) { /*Hay 3 metodos constructores: Default, Constructor y Copia */
        this.license = license;
        this.driver = driver;
    }

    String getDataCar() {
        if (license!=null && driver.name!=null && passenger!=0) {
            return "License: " + license + ", Driver: "+ driver.name + ", Passenger: " + passenger;
        }
        return "Error!, please, set var \"passenger\" as 4";
    }

    public String getLicense() {
        return license;
    }

    public int getPassenger() {
        return passenger;
    }

    public void setPassenger(int passenger) {
        if (passenger==4) {
            this.passenger = passenger;
        } else {
            System.out.println("Invalid number");
        }
    }
}
