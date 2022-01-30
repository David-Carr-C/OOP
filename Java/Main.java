import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

class Main {
    public static void main(String[] args) {
        // Prueba
        System.out.println("Hi!");
        Car car = new Car( "HQ2233", new Account("Daniela", "DAPASD12313") );
        //car.license = "HQ2233";
        //car.driver = "Daniela";
        car.setPassenger(1);
        //car.passenger = 4;
        System.out.println(car.getDataCar());
        //System.out.println("Car license: " + car.license + "\nCar driver: " + car.driver + "\nCar passenger: " + car.passenger);
        
        // Creacion de objetos
        UberX firstUber = new UberX("AWS1010", new Driver("David", "DA10VID10"), "Chevrolet", "Spark");
        firstUber.setPassenger(4);
        System.out.println(firstUber.getDataCar());


        UberPool secondUber = new UberPool("DDDDCCC10", new Driver("Daniela", "DA10NIE10LA"), "Dodge", "Attitude");
        secondUber.setPassenger(4);
        System.out.println(secondUber.getDataCar());

        Map<String, Map<String,Integer>> typeCarAccepted = new HashMap<String, Map<String,Integer>>();
        ArrayList<String> seatsMaterial = new ArrayList<String>();
        UberVan thirdUber = new UberVan("AW10AW10", new Driver("David", "DADA1010"), typeCarAccepted, seatsMaterial);
        thirdUber.setPassenger(6);
        System.out.println(thirdUber.getDataCar());
    }
}