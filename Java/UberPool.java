public class UberPool extends Car{
    String brand;
    String model;

    public UberPool(String license, Account driver, String brand, String model) {
        super(license,driver);
        this.brand = brand;
        this.model = model;
    }

    @Override
    public String getDataCar() {
        if (model!=null && brand!=null) {
            return super.getDataCar() + ", Brand: " + brand + ", Model: "+ model;
        } 
        return "Error!";
    }
}
