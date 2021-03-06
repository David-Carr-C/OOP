import java.util.ArrayList;
import java.util.Map;

public class UberVan extends Car{
    Map<String, Map<String,Integer>> typeCarAccepted;
    ArrayList<String> seatsMaterial;

    public UberVan(String license, Account driver, Map<String, Map<String,Integer>> typeCarAccepted, ArrayList<String> seatsMaterial) {
        super(license,driver);
        this.typeCarAccepted = typeCarAccepted;
        this.seatsMaterial = seatsMaterial;
    }

    @Override
    public void setPassenger(int passenger) {
        if (passenger==6) {
            this.passenger = passenger;
        } else {
            System.out.println("Invalid number!, please set 6 passengers!");
        }
    }

    @Override
    public String getDataCar() {
        if (typeCarAccepted!=null && seatsMaterial!=null) {
            return super.getDataCar()+", TypeCarAccepted: "+typeCarAccepted+", Seat Material: "+seatsMaterial;
        }
        return "Error!";
    }
}