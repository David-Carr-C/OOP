import java.util.ArrayList;
import java.util.Map;

public class UberBlack extends Car{
    Map<String, Map<String,Integer>> typeCarAccepted;
    // Marca        Modelo, Año
    ArrayList<String> seatsMaterial;
    //String[] seatsMaterial = {"Vinil","Piel"};

    public UberBlack(String license, Account driver, Map<String, Map<String,Integer>> typeCarAccepted, ArrayList<String> seatsMaterial) {
        super(license,driver);
        this.typeCarAccepted = typeCarAccepted;
        this.seatsMaterial = seatsMaterial;
    }

    @Override
    public String getDataCar() {
        if (typeCarAccepted!=null && seatsMaterial!=null) {
            return super.getDataCar() + ", Type-Car-Accepted: " + typeCarAccepted + ", Seat-Material: "+ seatsMaterial;
        }
        return "Error!";
    }
}
