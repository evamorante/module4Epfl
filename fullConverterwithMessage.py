def changeMoney(dollars):
    francs = dollars*1.02
    message = dollars+" dollars are "+francs+" francs."
    return message

print(changeMoney(25))

def changeWater(liters):
    gallons = liters*0.17
    message = liters+" liters are "+gallons+" gallons."
    return message

print(changeWater(3))

def changeHeigth(meters):
    centimeters = meters/100
    message = centimeters+" centimeters are "+meters+" meters."
    return message

print(changeHeigth(34))