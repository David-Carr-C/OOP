from payment import Payment

class Paypal(Payment):
    def __init__(self,id):
        super().__init__(id)

# SOLID