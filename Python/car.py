from account import Account


class Car:
    __id = int
    __license = str
    __driver = Account
    _passenger = int

    def __init__(self, license, driver):
        self.license = license
        self.driver = driver