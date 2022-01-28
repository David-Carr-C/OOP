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
        UberX uber = new UberX("AWS1010", new Account("David", "DA10VID10"), "Chevrolet", "Spark");
        uber.setPassenger(4);
        System.out.println(uber.getDataCar());


        UberPool uberSecond = new UberPool("DDDDDDCCC10", new Account("Daniela", "DA10NIE10LA"), "Dodge", "Attitude");
        uberSecond.setPassenger(4);
        System.out.println(uberSecond.getDataCar());
    }
}