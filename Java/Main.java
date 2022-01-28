class Main {
    public static void main(String[] args) {
        // Pruebas
        System.out.println("Hi!");
        Car car = new Car( "HQ2233", new Account("Daniela", "DAPASD12313") );
        //car.license = "HQ2233";
        //car.driver = "Daniela";
        car.passenger = 4;
        System.out.println(car.getDataCar());
        //System.out.println("Car license: " + car.license + "\nCar driver: " + car.driver + "\nCar passenger: " + car.passenger);
        
        // New Uber
        UberX uber = new UberX("AWS1010", new Account("David", "DA10VID10"), "Chevrolet", "Spark");
        System.out.println(uber.getDataCar());


        UberPool uberSecond = new UberPool("DDDDDDCCC10", new Account("Daniela", "DA10NIE10LA"), "Dodge", "Attitude");
        System.out.println(uberSecond.getDataCar());
    }
}