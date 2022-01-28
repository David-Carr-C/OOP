public class Car {
    private int id;
    private String license;
    private Account driver; /*<- se cambia el tipo String driver;*/
    protected int passenger;

    public Car(String license, Account driver) { /*Hay 3 metodos constructores: Default, Constructor y Copia */
        this.license = license;
        this.driver = driver;
    }

    String getDataCar() {
        if (license!=null && driver.name!=null && passenger!=0) {
            return "License: " + license + ", Driver: "+ driver.name + ", Passenger: " + passenger;
        }
        return "Error!";
    }

    public int getPassenger() {
        return passenger;
    }

    public void setPassenger(int passenger) {
        if (passenger==4) {
            this.passenger = passenger;
        } else {
            System.out.println("Invalid number, please, set var \"passenger\" as 4");
        }
    }

    public String getLicense() {
        return license;
    }

    public void setLicense(String license) {
        this.license = license;
    }

    public Account getDriver() {
        return driver;
    }

    public void setDriver(Account driver) {
        this.driver = driver;
    }
}
