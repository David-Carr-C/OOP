from uberpool import UberPool
from uberx import UberX
from account import Account
from car import Car

def run():
    print("Aqui no comienza el codigo")


if __name__ == "__main__": #Aqui comienza el codigo, es la funcion main y de donde arranca
                            #Tambien es utilizado para definir cual es el main entre tantos modulos, y cual es un modulo y cual es el arranque
    print("Hi")
    run()
    #car = Car()
    #car.license = "ASD993"
    #car.driver = "Daniela"
    #car.passenger = 4
    #print(vars(car))
    car = Car("ASDAWS1", Account("Daniela", "DA24445"))
    print(vars(car))
    print(vars(car.driver))

    #UberX
    uber = UberX("AW10AW10", Account ("David", "DA10VID10"), "Chevrolet", "Spark")
    print(vars(uber))
    print(vars(uber.driver))

    uberSecond = UberPool("AAAAABB", Account("Daniela", "DA10NI10ELA"), "Dodge", "Attitude")
    print(vars(uberSecond))
    print(vars(uberSecond.driver))