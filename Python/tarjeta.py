from payment import Payment

class Tarjeta(Payment):
    def __init__(self,id):
        super().__init__(id)

# SOLID